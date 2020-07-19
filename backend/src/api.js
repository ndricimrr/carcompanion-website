"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const middlewares = require("./middlewares");

const auth = require("./routes/auth");
const cars = require("./routes/cars");
const questions = require("./routes/questions");
const freelancers = require("./routes/freelancers");
const request = require("./routes/request");

const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);

// Basic route
api.get("/", (req, res) => {
  res.json({
    name: "Car Companion",
  });
});

// API routes
api.use("/auth", auth);
api.use("/cars", cars);
api.use("/questions", questions);
api.use("/freelancers", freelancers);
api.use("/request", request);

module.exports = api;
