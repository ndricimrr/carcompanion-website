"use strict";

const RequestModel = require("../models/request");

//parameter received from frontend is body of request
const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let test = {};
    let request = await RequestModel.create(req.body);

    return res.status(201).json(request);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// params.id is id of request
const read = async (req, res) => {
  try {
    let request = RequestModel.find(req.params.id);

    if (!request)
      return res.status(404).json({
        error: "Not Found",
        message: `Request not found`,
      });

    return res.status(200).json(request);
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

// param id is id of request
const update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let movie = await RequestModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// param.id is id of request
const remove = async (req, res) => {
  try {
    await RequestModel.findByIdAndRemove(req.params.id).exec();

    return res
      .status(200)
      .json({ message: `Request with id${req.params.id} was deleted` });
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// params.id = id of currentUser
const list = async (req, res) => {
  try {
    let sent = RequestModel.find({ senderID: { $eq: req.params.id } });
    let received = RequestModel.find({ receiverID: { $in: req.params.id } });

    let requests = {
      sent: sent,
      received: received,
    };
    if (!sent && !received)
      return res.status(404).json({
        error: "Not Found",
        message: `Requests not found`,
      });

    return res.status(200).json(requests);
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
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
