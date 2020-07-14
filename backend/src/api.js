"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const middlewares = require("./middlewares");

const auth = require("./routes/auth");
const movie = require("./routes/movie");
const cars = require("./routes/cars");
const questions = require("./routes/questions");
const freelancers = require("./routes/freelancers");
const carPurchaseRequests = require("./routes/carPurchaseRequest");

const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);

// Basic route
api.get("/", (req, res) => {
  res.json({
    name: "Car Companion Backend",
  });
});

// API routes
api.use("/auth", auth);
api.use("/movies", movie);
api.use("/cars", cars);
api.use("/questions", questions);
api.use("/freelancers", freelancers);
api.use("/carPurchaseRequest", carPurchaseRequests)

module.exports = api;