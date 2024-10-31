"use strict";

const express = require("express");
const morgan = require("morgan");

const userRouter = require("./server/routes/userRouter")

const app = express();

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("App started!");
  next();
});

app.use("/api/users", userRouter);

module.exports = app;
