// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborfavors_db"
);

const requestsSeed = [
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client"
    },
    tasks: ["Play with cat", "Move large vehicle"],
    startDate: "08/09/2019",
    endDate: "08/10/2019",
    date: Date()
  },
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client"
    },
    tasks: ["Sign for packages", "Vaccuum"],
    startDate: "08/12/2019",
    endDate: "08/15/2019",
    date: Date()
  }
];

db.Requests.remove({})
  .then(() => db.Requests.collection.insertMany(requestsSeed))
  .then(data => {
    console.log(data.result.n + " requests inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
