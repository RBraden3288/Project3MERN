const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require bcrypt to hash passwords
// const bcrypt = require("bcrypt");

// Use bcyrpt to hash passwords

// Update to include residence type, security.
const usersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  neighborhood: String,
  bio: String,
  photoUrl: String
});

// residenceType: String,
// security: String,
// date: { type: Date, default: Date.now }
const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
