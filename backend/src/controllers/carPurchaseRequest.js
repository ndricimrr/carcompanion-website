"use strict";

// Create car purchase request model
const CarPurchaseRequestModel = require("../models/carPurchaseRequest");
const UserModel = require("../models/user");

// creates new car purchase request
const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let carPurchaseRequest = await CarPurchaseRequestModel.create(req.body);

    return res.status(201).json(carPurchaseRequest);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// gets carPurchaseRequest with specific id
const read = async (req, res) => {
    try {
        let carPurchaseRequest = await CarPurchaseRequestModel.findById(req.params.id).exec();
    
        if (!carPurchaseRequest) return res.status(404).json({
          error: 'Not Found',
          message: `Car Purchase Request not found`
        });
    
        return res.status(200).json(carPurchaseRequest)
    } catch(err) {
    return res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
    }
};

// updates carPurchaseRequest with specific id
const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }
    try {
      let carPurchaseRequest = await CarPurchaseRequestModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(carPurchaseRequest);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

// removes carPurchaseRequest with specific id
const remove = async (req, res) => {
  try {
    await CarPurchaseRequestModel.findByIdAndRemove(req.params.id).exec();
    return res
      .status(200)
      .json({ message: `Car purchase request with id${req.params.id} was deleted` });
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// lists all carPurchaseRequests for a specific user > not sure about this one!
const list = async (req, res) => {
  try {
    return res.status(200).json(req);
    // let users = await UserModel.find({}).exec();
    // get current user
    let user = await UserModel.findById(req.userId).exec();
    req.body.id
    let variable = carPurchaseRequest.findById({})
    let rav2 = variable.filter((item) => {
        item.senderID == req.body.id
    })

    return res.status(200).json(user);

    let carPurchaseRequests = [];
    user.forEach((element) => {
      if (user.carPurchaseRequestData.message) {
        carPurchaseRequests.push(element.carPurchaseRequestData);
      }
    });
    // return res.status(200).json(carPurchaseRequests);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// export
module.exports = {
  create,
  read,
  update,
  remove,
  list,
};
