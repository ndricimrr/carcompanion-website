"use strict";

const CarModel = require("../models/car");
const UserModel = require("../models/user");

const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    // let car = await CarModel.create(req.body);
    var user = await UserModel.findById(req.body.id).exec();

    user.carOwnerData.cars = user.carOwnerData.cars.push(req.body);
    let newCar = await UserModel.findByIdAndUpdate(req.body.id, user, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(201).json(user.carOwnerData.cars);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const read = async (req, res) => {
  try {
    let car = await CarModel.findById(req.params.id).exec();

    if (!car)
      return res.status(404).json({
        error: "Not Found",
        message: `Car not found`,
      });

    return res.status(200).json(car);
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

const update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let car = await CarModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(car);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await CarModel.findByIdAndRemove(req.params.id).exec();

    return res
      .status(200)
      .json({ message: `Car with id${req.params.id} was deleted` });
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const list = async (req, res) => {
  try {
    let users = await UserModel.find({}).exec();
    let cars = [];
    users.forEach((element) => {
      if (element.carOwnerData.cars.length > 0) {
        cars.push.apply(cars, element.carOwnerData.cars);
      }
    });
    return res.status(200).json(cars);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

module.exports = {
  create,
  read,
  update,
  remove,
  list,
};
