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
    startDate: ISODate("2019-08-10"),
    endDate: ISODate("2019-08-12"),
    date: Date()
  },
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client"
    },
    tasks: ["Sign for packages", "Vaccuum"],
    startDate: ISODate("2019-08-11"),
    endDate: ISODate("2019-08-12"),
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
