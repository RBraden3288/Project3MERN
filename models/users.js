const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Update to include residence type, security.
const usersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  neighborhood: String,
  residenceType: String,
  entryType: String,
  bio: String,
  skills: String,
  photoUrl: String,
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
