"use strict";

const User = require("./../Models/userModel");

exports.getAllUser = async (req, res, next) => {
  const users = await User.find();

  try {
    req.status(200).json({
      status: "success",
      requestDate: date.now().toISOString(),
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

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.id);
    res.status(200).json({
      status: "success",
      requestDate: date.now().toISOString(),
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `not found user! Error: ${err}`,
    });
  }
};

exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      requestDate: date.now().toISOString(),
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

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestDate: date.now().toISOString(),
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `there was a problem updating user! Error: ${err}`,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
  } catch (err) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(204).json({
        status: "success",
        requestDate: date.now().toISOString(),
        massage: "successful",
      });
    } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `there was a problem deleting user! Error: ${err}`,
    });
    }
  }
};
