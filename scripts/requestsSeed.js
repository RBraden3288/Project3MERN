// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborfavors_db",
  { useNewUrlParser: true }
);

const requestsSeed = [
  {
    tasks: {
      dust: true,
      vaccuum: false,
      temp: false,
      timers: false,
      mail: false,
      packages: false,
      yardwork: true,
      trash: false,
      moveCar: false,
      moveMC: false,
      moveMP: false,
      moveOS: true,
      playCat: false,
      feedCat: false,
      litter: false,
      feedCritter: false,
      cleanCritTank: false,
      feedFish: false,
      cleanFishTank: false
    },
    startDate: "08/10/2019",
    endDate: "08/12/2019",
    date: Date()
  },
  {
    tasks: {
      dust: false,
      vaccuum: true,
      temp: false,
      timers: false,
      mail: false,
      packages: false,
      yardwork: false,
      trash: false,
      moveCar: false,
      moveMC: false,
      moveMP: false,
      moveOS: false,
      playCat: false,
      feedCat: false,
      litter: false,
      feedCritter: false,
      cleanCritTank: false,
      feedFish: true,
      cleanFishTank: false
    },
    startDate: "08/15/2019",
    endDate: "08/16/2019",
    date: Date()
  }
];

db.Requests.deleteMany({})
  .then(() => db.Requests.insertMany(requestsSeed))
  .then(data => {
    console.log(data + " requests inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//  client: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Client"
// },
