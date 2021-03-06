const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requests have to reference the client since only clients fill out the request form.
// Tasks will encompass indoor/outdoor. Need to see how React handles forms and how that affects Mongoose.
// Separate the date by start date & end date. Don't require an end date b/c they could want services for same-day only.
const requestsSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  requestTitle: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  tasks: {
    dust: Boolean,
    vaccuum: Boolean,
    temp: Boolean,
    timers: Boolean,
    mail: Boolean,
    packages: Boolean,
    yardwork: Boolean,
    trash: Boolean,
    moveCar: Boolean,
    moveMC: Boolean,
    moveMP: Boolean,
    moveOS: Boolean,
    playCat: Boolean,
    feedCat: Boolean,
    litter: Boolean,
    feedCritter: Boolean,
    cleanCritTank: Boolean,
    feedFish: Boolean,
    cleanFishTank: Boolean
  },
  date: { type: Date, default: Date.now }
});

const Request = mongoose.model("Request", requestsSchema);

module.exports = Request;
