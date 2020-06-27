"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const CarsController = require("../controllers/car");

router.get("/", CarsController.list); // List all cars
router.post("/", middlewares.checkAuthentication, CarsController.create); // Create a new car
router.get("/:id", CarsController.read); // Read a car by Id
router.put("/:id", middlewares.checkAuthentication, CarsController.update); // Update a car by Id
router.delete("/:id", middlewares.checkAuthentication, CarsController.remove); // Delete a car by Id

module.exports = router;
