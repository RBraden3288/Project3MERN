const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Update to include residence type, security.
const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  neighborhood: String,
  bio: String,
  photoUrl: String,
  residenceType: String,
  security: String,
  attendant: false,
  date: { type: Date, default: Date.now }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
