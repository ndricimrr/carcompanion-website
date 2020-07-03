"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const QuestionsController = require("../controllers/question");

router.get("/", QuestionsController.list); // List all questions
router.post("/", middlewares.checkAuthentication, QuestionsController.create); // Create a new question
router.get("/:id", QuestionsController.read); // Read a question by Id
router.put("/:id", middlewares.checkAuthentication, QuestionsController.update); // Update a question by Id
router.put("/answer/:id", middlewares.checkAuthentication, QuestionsController.createAnswer); // Update a question by Id
router.delete("/:id", middlewares.checkAuthentication, QuestionsController.remove); // Delete a question by Id

module.exports = router;
