"use strict";

const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "a user must have username"],
    trim: true,
  },
  first_name: {
    type: String,
    required: [true, "a user must have name"],
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
    default: "",
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    unique: true,
    validate: [validator.isMobilePhone, "this number is'nt valid"],
    select: false,
  },
  national_number: {
    type: Number,
    unique: true,
    select: false,
  },
  isPremium: {
    type: Boolean,
    select: false,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
