"use strict";

// get connected to mongoose
const mongoose = require("mongoose");

// Define the freelancer schema
const FreelancerSchema = new mongoose.Schema({
  freelancerName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  review: {
    type: Number,
    required: true,
  },
  inspections: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  images: {
    thumbnail: String,
    original: String,
  },
});

FreelancerSchema.set("versionKey", false);
FreelancerSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("Freelancer", FreelancerSchema);
