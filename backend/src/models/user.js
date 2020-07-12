"use strict";

const mongoose = require("mongoose");
const CarSchema = require("../models/car").schema;
const FreelancerSchema = require("../models/freelancer").schema;

// Define car owners schema
var CarOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  address: {
    type: String,
  },
  preferredModel: {
    type: String,
  },
  cars: {
    type: [CarSchema],
    required: false,
  },
});

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userType: {
    type: String,
    enum: ["simple", "carowner", "freelancer"],
    default: "simple",
    required: true,
  },
  carOwnerData: {
    type: CarOwnerSchema,
    default: {},
    required: false,
  },
  freelancerData: {
    type: FreelancerSchema,
    default: {},
    required: false,
  },
});

UserSchema.set("versionKey", false);

// Export the Movie model
module.exports = mongoose.model("User", UserSchema);
