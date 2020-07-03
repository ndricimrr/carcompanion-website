"use strict";

const mongoose = require("mongoose");

// Define answers schema
var AnswerSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
});

// Define the question schema
const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  areas: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  images: {
    thumbnail: String,
    original: String,
  },
  answers: [AnswerSchema]
});

QuestionSchema.set("versionKey", false);
QuestionSchema.set("timestamps", true);

// Export the Question model
module.exports = mongoose.model("Question", QuestionSchema);
