// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT
require("dotenv").config();
var mongoose = require("mongoose");
const db = require("../models");

// RACHEL >> Might need to put the URI key in here, too.
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const requestsSeed = [
  {
    userID: "5d508c2b183daa32fd4b8706",
    requestTitle: "Keep my Baby Petunias Alive",
    startDate: "08/10/2019",
    endDate: "08/12/2019",
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
    date: Date()
  },
  {
    userID: "5d508c2b183daa32fd4b8707",
    requestTitle: "LA Day Trip",
    startDate: "08/15/2019",
    endDate: "08/16/2019",
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
