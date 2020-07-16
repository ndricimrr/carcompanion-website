"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const FreelancerRequestController = require("../controllers/freelancerRequest");

router.post("/", middlewares.checkAuthentication, FreelancerRequestController.create); // Create a new freelancer request
router.get("/:id", FreelancerRequestController.read); // Read a freelancer request by Id
router.put("/:id", middlewares.checkAuthentication, FreelancerRequestController.update); // Update a freelancer request by Id
router.delete("/:id", middlewares.checkAuthentication, FreelancerRequestController.remove); // Delete a freelancer request by Id

module.exports = router;