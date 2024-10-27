"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("App started!");
  next();
});

module.exports = app;
