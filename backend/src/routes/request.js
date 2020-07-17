"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const RequestController = require("../controllers/request");

router.get("/:id", middlewares.checkAuthentication, RequestController.read); // Read request by id
router.get(
  "/list/:id",
  middlewares.checkAuthentication,
  RequestController.list
); // List all requests connected to user with this id
router.post("/", middlewares.checkAuthentication, RequestController.create); // Create a new request
router.put("/:id", middlewares.checkAuthentication, RequestController.update); // Update a request by Id
router.delete(
  "/:id",
  middlewares.checkAuthentication,
  RequestController.update
); // Update a request by request Id

module.exports = router;
