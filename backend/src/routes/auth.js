"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const AuthController = require("../controllers/auth");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/:id", middlewares.checkAuthentication, AuthController.me);
router.put(
  "/update-carowner",
  middlewares.checkAuthentication,
  AuthController.updateCarOwnerData
);
router.put(
  "/update-freelancer",
  middlewares.checkAuthentication,
  AuthController.updateFreelancerData
);
router.get("/logout", middlewares.checkAuthentication, AuthController.logout);

module.exports = router;
