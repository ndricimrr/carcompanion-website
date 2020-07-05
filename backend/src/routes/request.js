"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const RequestController = require("../controllers/request");

router.get("/", RequestController.list); // List all requests
router.post("/", middlewares.checkAuthentication, RequestController.create); // Create a new request
router.get("/:id", RequestController.read); // Read a request by Id
router.put("/:id", middlewares.checkAuthentication, RequestController.update); // Update a request by Id
router.delete("/:id", middlewares.checkAuthentication, RequestController.remove); // Delete a request by Id

module.exports = router;
