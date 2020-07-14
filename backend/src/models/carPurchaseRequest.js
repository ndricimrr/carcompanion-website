"use strict";

const mongoose = require("mongoose");

// Define the carPurchaseRequest schema
const CarPurchaseRequestSchema = new mongoose.Schema({
  senderID: {
    type: String,
    required: true,
  },
  receiverID: {
    type: String,
    required: true,
  },
  carID: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  accepted: {
    type: Boolean,
    required: true,
  },
});

CarPurchaseRequestSchema.set("versionKey", false);
CarPurchaseRequestSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("CarPurchaseRequest", CarPurchaseRequestSchema);