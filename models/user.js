// SCHEMA
// ACTION ITEMS
// Rachel! Just making sure this was here bc it wasn't in our structure before - feel free to change naming, etc.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  neighborhood: String,
  bio: String,
  photoUrl: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
