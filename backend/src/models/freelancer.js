"use strict";

// get connected to mongoose
const mongoose = require("mongoose");

// Define the freelancer schema
const FreelancerSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  problemArea: {
    type: Number,
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
