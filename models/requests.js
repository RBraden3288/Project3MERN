const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant"
  },
  tasks: { type: Array, required: true },
  dateRange: String,
  date: { type: Date, default: Date.now }
});

const Requests = mongoose.model("Requests", requestsSchema);

module.exports = Requests;
