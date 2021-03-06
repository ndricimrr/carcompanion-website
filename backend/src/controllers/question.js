"use strict";

const QuestionModel = require("../models/question");

const create = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });

  try {
    let question = await QuestionModel.create(req.body);

    return res.status(201).json(question);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const read = async (req, res) => {
  try {
    let question = await QuestionModel.findById(req.params.id).exec();

    if (!question)
      return res.status(404).json({
        error: "Not Found",
        message: `Question not found`,
      });

    return res.status(200).json(question);
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};

const update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let question = await QuestionModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(question);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await QuestionModel.findByIdAndRemove(req.params.id).exec();

    return res
      .status(200)
      .json({ message: `Question with id${req.params.id} was deleted` });
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const list = async (req, res) => {
  try {
    let questions = await QuestionModel.find({}).exec();

    return res.status(200).json(questions);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const createAnswer = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }

  try {
    let question = await QuestionModel.findById(req.params.id).exec();

    question.answers = question.answers.push(req.body);
    
    let newQuestion = await QuestionModel.findByIdAndUpdate(req.params.id, question, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(newQuestion);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};
const updateAnswer = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request body is empty",
    });
  }
  try {
    let question = await QuestionModel.findById(req.params.id).exec();
    let index = question.answers.findIndex(ans => ans._id == req.params.answerId);
    question.answers[index] = req.body;
    let newQuestion = await QuestionModel.findByIdAndUpdate(req.params.id, question, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json(question);
} catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

const removeAnswer = async (req, res) => {
  try {
    let question = await QuestionModel.findById(req.params.id).exec();
    let index = question.answers.findIndex(ans => ans._id == req.params.answerId);
    question.answers = question.answers.splice(index, 1);
    let newQuestion = await QuestionModel.findByIdAndUpdate(req.params.id, question, {
      new: true,
      runValidators: true,
    }).exec();

    return res.status(200).json(question);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
};

module.exports = {
  create,
  read,
  update,
  remove,
  list,
  createAnswer,
  updateAnswer,
  removeAnswer
};
