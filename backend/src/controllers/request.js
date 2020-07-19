"use strict";

const RequestModel = require("../models/request");
const UserModel = require("../models/user");

//parameter received from frontend is body of request
const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let receiver = [];
    var id = -1;
    if (req.body.type == "inspection") {
      receiver = await UserModel.find({
        "freelancerData._id": req.body.receiverID,
      }).exec();

      if (receiver != null) {
        var body = req.body;
        body.receiverID = receiver[0]._id;
        let request = await RequestModel.create(body);

        return res.status(201).json(request);
      } else {
        return res.status(400).json({
          error: "Bad Request",
          message: "The receiver ID does not exist for inspection",
        });
      }
    } else {
      receiver = await UserModel.find({}).exec();
      let carOwners = receiver.filter((user) => {
        return user.carOwnerData.name != undefined;
      });

      carOwners.forEach((user) => {
        user.carOwnerData.cars.forEach((car) => {
          if (car._id == req.body.receiverID) {
            id = user._id;
          }
        });
      });

      if (id != -1) {
        var body = req.body;
        body.receiverID = id;
        let request = await RequestModel.create(body);

        return res.status(201).json(request);
      } else {
        return res.status(400).json({
          error: "Bad Request",
          message: "The receiver ID does not exist",
        });
      }
    }
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
    let request = RequestModel.find(req.params.id).exec();

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
    let request = await RequestModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).exec();

    return res.status(200).json(request);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

// param id is id of request, this function updates request status accept/decline
const updateRequestStatus = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let request = await RequestModel.findById(req.params.id).exec();
    request.accepted = req.body.accepted;
    let updateRequest = await RequestModel.findByIdAndUpdate(
      req.params.id,
      request,
      {
        new: true,
        runValidators: true,
      }
    ).exec();

    return res.status(200).json(updateRequest);
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
    let sent = await RequestModel.find({
      senderID: { $eq: req.params.id },
    }).exec();

    let received = await RequestModel.find({
      receiverID: { $eq: req.params.id },
    }).exec();

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
  updateRequestStatus,
};
