"use strict";

// get connected to mongoose
const mongoose = require("mongoose");

// Define the freelancer schema
//Suggestions to add to the freelandcer model: city, telephone, email, bio, array of reviews(comment+starrating), areas of expertise
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
  rating: {
    type: Number,
    required: true,
  },
  inspections: {
    type: Number,
    required: true,
  },
  role: {
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
  image: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

FreelancerSchema.set("versionKey", false);
FreelancerSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("Freelancer", FreelancerSchema);
