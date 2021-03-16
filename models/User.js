const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  digitalServiceTax: {
    type: Boolean,
    default: false,
    required: true,
  },
  citizenship: {
    type: String,
    required: true,
  },
  turnOverTax: {
    type: Boolean,
    default: false,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  shortMessageService: {
    type: Boolean,
    required: true,
    default: false,
  },
  bankDetails: {
    type: String,
    required: true,
  },
  incomeSrc: {
    type: String,
  },
  employerPin: {
    type: String,
  },
  employerName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
