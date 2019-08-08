// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborfavors_db"
);

const attendantSeed = [
  {
    firstName: "Srirachel",
    lastName: "Sauce",
    email: "hellaspicy@gmail.com",
    password: "N0tTapat!o",
    neighborhood: "Sunset",
    bio:
      "I actually know how to recycle. Down for any task except for feeding rodents.",
    photoUrl: "https://photobucket.com/yum",
    attendant: true,
    date: Date()
  },
  {
    firstName: "Koko",
    lastName: "Dash",
    email: "kdash@gmail.com",
    password: "Passw0rd",
    neighborhood: "SOMA",
    bio: "Like a good neighbor, I'm there.",
    photoUrl: "https://photobucket.com/yummy",
    attendant: true,
    date: Date()
  }
];

db.Attendant.remove({})
  .then(() => db.Attendant.collection.insertMany(attendantSeed))
  .then(data => {
    console.log(data.result.n + " attendant inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
