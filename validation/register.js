const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.digitalServiceTax = !isEmpty(data.digitalServiceTax)
    ? data.digitalServiceTax
    : "false";
  data.citizenship = !isEmpty(data.citizenship) ? data.citizenship : "true";
  data.turnOverTax = !isEmpty(data.turnOverTax) ? data.turnOverTax : "false";
  data.profession = !isEmpty(data.profession) ? data.profession : "";
  data.shortMessageService = !isEmpty(data.shortMessageService)
    ? data.shortMessageService
    : "true";
  data.bankDetails = !isEmpty(data.bankDetails) ? data.bankDetails : "";
  data.incomeSrc = !isEmpty(data.incomeSrc) ? data.incomeSrc : "";
  data.employerPin = !isEmpty(data.employerPin) ? data.employerPin : "";
  data.employerName = !isEmpty(data.employerName) ? data.employerName : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "name cannot be blank";
  }
  if (Validator.isEmpty(data.digitalServiceTax)) {
    errors.digitalServiceTax = "This field cannot be blank";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field cannot be blank";
  }
  if (Validator.isEmpty(data.citizenship)) {
    errors.citizenship = "Citizenship cannot be blank";
  }
  if (Validator.isEmpty(data.turnOverTax)) {
    errors.turnOverTax = "TurnOverTax cannot be blank";
  }
  if (Validator.isEmpty(data.profession)) {
    errors.profession = "Profession cannot be blank";
  }
  if (Validator.isEmpty(data.shortMessageService)) {
    errors.shortMessageService = "SMS cannot be blank";
  }
  if (Validator.isEmpty(data.bankDetails)) {
    errors.bankDetails = "BankDetails cannot be blank";
  }
  if (Validator.isEmpty(data.incomeSrc)) {
    errors.incomeSrc = "IncomeSrc cannot be blank";
  }
  if (Validator.isEmpty(data.employerPin)) {
    errors.employerPin = "EmployerPIN cannot be blank";
  }
  if (Validator.isEmpty(data.employerName)) {
    errors.employerName = "EmployerName cannot be blank";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be blank";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
