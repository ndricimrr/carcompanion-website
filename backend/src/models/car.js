"use strict";

const mongoose = require("mongoose");

// Define the movie schema
const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    thumbnail: String,
    original: String,
  },
});

CarSchema.set("versionKey", false);
CarSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("Car", CarSchema);
