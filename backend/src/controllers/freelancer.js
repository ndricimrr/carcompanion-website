"use strict";

// Create freelancer model
const FreelanceModel = require("../models/freelancer");

// adds new freelancer
const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let freelancer = await FreelanceModel.create(req.body);

    return res.status(201).json(freelancer);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// gets freelancer with specific id
const read = async (req, res) => {
  try {
    let freelancer = await FreelanceModel.findById(req.params.id).exec();

    if (!freelancer)
      return res.status(404).json({
        error: "Not Found",
        message: `Freelancer not found`,
      });

    return res.status(200).json(freelancer);
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

// updates freelancer with specific id
const update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let freelancer = await FreelanceModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(freelancer);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// removes freelancer with specific id
const remove = async (req, res) => {
  try {
    await FreelanceModel.findByIdAndRemove(req.params.id).exec();

    return res
      .status(200)
      .json({ message: `Freelancer with id${req.params.id} was deleted` });
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// lists all freelancers
const list = async (req, res) => {
  try {
    let freelancers = await FreelanceModel.find({}).exec();

    return res.status(200).json(freelancers);
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
