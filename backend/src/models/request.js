"use strict";

const mongoose = require("mongoose");

// Define the request schema
const RequestSchema = new mongoose.Schema({
  senderID: {
    type: String,
    required: true,
  },
  receiverID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["car", "inspection"],
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
  carMake: {
    type: String,
    required: true,
  },
});

RequestSchema.set("versionKey", false);
RequestSchema.set("timestamps", true);

// Export the car model
module.exports = mongoose.model("RequestSchema", RequestSchema);
