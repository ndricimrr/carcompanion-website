"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const CarPurchaseRequestController = require("../controllers/carPurchaseRequest");

router.get("/", CarPurchaseRequestController.list); // List all car purchase requests
router.post("/", middlewares.checkAuthentication, CarPurchaseRequestController.create); // Create a new car purchase request
router.get("/:id", CarPurchaseRequestController.read); // Read a car purchase request by Id
router.put("/:id", middlewares.checkAuthentication, CarPurchaseRequestController.update); // Update a car purchase request by Id
router.delete("/:id", middlewares.checkAuthentication, CarPurchaseRequestController.remove); // Delete a car purchase request by Id

module.exports = router;