"use strict";

const mongoose = require("mongoose");

// Define the Freelancer Request schema
const FreelancerRequestSchema = new mongoose.Schema({
  senderID: {
    type: String,
    required: true,
  },
  receiverID: {
    type: String,
    required: true,
  },
  accepted: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  carID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  meetingDate: {
    type: Date,
    required: true,
  },
});

FreelancerRequestSchema.set("versionKey", false);
FreelancerRequestSchema.set("timestamps", true);

// Export the Freelancer Request model
module.exports = mongoose.model("FreelancerRequest", FreelancerRequestSchema);
