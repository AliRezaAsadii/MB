"use strict";

const User = require("./../Models/userModel");

const getAllUser = async (req, res, next) => {
  const users = await User.find();

  try {
    req.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `not found users! Error: ${err}`,
    });
  }
};

const createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: `there was a problem creating user! Error: ${err}`,
    });
  }
};
