// require dependencies for validation
// (validator to validate inputs and is-empty to see if form fields are empty)
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  // initialize an errors object to be returned when form is completed
  let errors = {};
  console.log(data);
  // if the firstName, etc. field is empty, set the value of the corresponding value to an empty string;
  // otherwise set it to the value of the input
  // done bc the validator dependency only works with strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // email validation - same as before
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email address";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
