// require dependencies for validation
// (validator to validate inputs and is-empty to see if form fields are empty)
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  // initialize an errors object to be returned when form is completed
  let errors = {};

  // if the firstName, etc. field is empty, set the value of the corresponding value to an empty string;
  // otherwise set it to the value of the input
  // done bc the validator dependency only works with strings
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordTwo = !isEmpty(data.passwordTwo) ? data.passwordTwo : "";
  data.neighborhood = !isEmpty(data.neighborhood) ? data.neighborhood : "";
  data.residence = !isEmpty(data.residence) ? data.residence : "";
  data.entryway = !isEmpty(data.entryway) ? data.entryway : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.photo_url = !isEmpty(data.photo_url) ? data.photo_url : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  //   data.date = !isEmpty(data.date) ? data.date : "";

  // using the validator functionalities to check for empty fields,
  // valid email formats, password requirements and password confirmation (i.e. pw equality)
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Name is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.firstName = "Name is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.passwordTwo)) {
    errors.passwordTwo = "Password confirmation is required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be between 8-30 characters";
  }

  if (!Validator.equals(data.password, data.passwordTwo)) {
    errors.passowrd2 = "Passwords must match";
  }

  // if (!Validator.equals(data.neighborhood, "Select")) {
  //     errors.neighborhood = "Neighborhood is required";
  // }

  // we return our errors object with any necessary errors and an isValid boolean
  // to see if we have any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
