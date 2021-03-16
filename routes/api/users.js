const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const User = require("../../models/User");

const validateRegisterInput = require("../../validation/register");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "This email has already been taken" });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      digitalServiceTax: req.body.digitalServiceTax,
      citizenship: req.body.citizenship,
      turnOverTax: req.body.turnOverTax,
      profession: req.body.profession,
      shortMessageService: req.body.shortMessageService,
      bankDetails: req.body.bankDetails,
      incomeSrc: req.body.incomeSrc,
      employerPIN: req.body.employerPIN,
      employerName: req.body.employerName,
      password: req.body.password,
    });

    newUser
      .save()
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => console.error(err));
  });
});

module.exports = router;
