"use strict";

// Create freelancer request model
const FreelancerRequestModel = require("../models/freelancerRequest");
const UserModel = require("../models/user");

// creates new freelancer request
const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let freelancerRequest = await FreelancerRequestModel.create(req.body);

    return res.status(201).json(freelancerRequest);
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
        let freelancerRequest = await FreelancerRequestModel.findById(req.params.id).exec();
    
        if (!freelancerRequest) return res.status(404).json({
          error: 'Not Found',
          message: `Freelancer Request not found`
        });
    
        return res.status(200).json(freelancerRequest)
    } catch(err) {
    return res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
    }
};

// updates freelancer request with specific id
const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }
    try {
      let freelancerRequest = await FreelancerRequestModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(freelancerRequest);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

// removes freelancer request with specific id
const remove = async (req, res) => {
  try {
    await FreelancerRequestModel.findByIdAndRemove(req.params.id).exec();
    return res
      .status(200)
      .json({ message: `Freelancer request with id${req.params.id} was deleted` });
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
};

