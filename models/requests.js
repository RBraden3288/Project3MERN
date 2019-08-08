const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requests have to reference the client since only clients fill out the request form.
// Tasks will encompass indoor/outdoor. Need to see how React handles forms and how that affects Mongoose.
// Separate the date by start date & end date. Don't require an end date b/c they could want services for same-day only.
const requestsSchema = new Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client"
  },
  tasks: { type: Array, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  date: { type: Date, default: Date.now }
});

const Requests = mongoose.model("Requests", requestsSchema);

module.exports = Requests;

// this.state = {
//   startDate: "",
//   endDate: "",
//   dust: false,
//   vaccuum: false,
//   temp: false,
//   timers: false,
//   mail: false,
//   packages: false,
//   yardwork: false,
//   trash: false,
//   moveCar: false,
//   moveMC: false,
//   moveMP: false,
//   moveOS: false,
//   playCat: false,
//   feedCat: false,
//   litter: false,
//   feedCritter: false,
//   cleanCritTank: false,
//   feedFish: false,
//   cleanFishTank: false,
// };
