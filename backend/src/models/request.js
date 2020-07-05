"use strict";

const mongoose = require("mongoose");

// Define the request schema
const RequestSchema = new mongoose.Schema({
  receiverId: [UserSchema],
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  accepted: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  date_of_acceptance: {
    type: Date,
    required: true,
  },
  urgency: {
    type: Number,
    required: true,
  },
  images: {
    thumbnail: String,
    original: String,
  },
  is_car_sale: {
    type: Boolean,
    required: true,
  },
});

RequestSchema.set("versionKey", false);
RequestSchema.set("timestamps", true);

// Export the Request model
module.exports = mongoose.model("Request", RequestSchema);
