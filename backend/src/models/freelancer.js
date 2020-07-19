"use strict";

// get connected to mongoose
const mongoose = require("mongoose");

// Define the freelancer schema
//Suggestions to add to the freelandcer model: city, telephone, email, bio, array of reviews(comment+starrating), areas of expertise
const FreelancerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  inspections: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "avatar",
  },
  badge: {
    type: String,
    enum: ["begginer", "medium", "advanced", "expert"],
    default: "begginer",
  },
  expertise: {
    type: String,
  },
  telephone: {
    type: String,
  },
  address: {
    type: String,
  },
});

FreelancerSchema.set("versionKey", false);
FreelancerSchema.set("timestamps", true);

// Export the Freelancer model
module.exports = mongoose.model("Freelancer", FreelancerSchema);
