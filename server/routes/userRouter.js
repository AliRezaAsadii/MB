"use strict";

const express = require("express");

const userController = require("./../../Controllers/userControllers");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
