"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const FreelancersController = require("../controllers/freelancer");

router.get("/", FreelancersController.list); // List all freelancers
router.post("/", middlewares.checkAuthentication, FreelancersController.create); // Create a new freelancer
router.get("/:id", FreelancersController.read); // Read a freelancer by Id
router.put("/:id", middlewares.checkAuthentication, FreelancersController.update); // Update a freelancer by Id
router.delete("/:id", middlewares.checkAuthentication, FreelancersController.remove); // Delete a freelancer by Id

module.exports = router;
