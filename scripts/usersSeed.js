// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborfavors_db"
);

const usersSeed = [
  {
    firstName: "Srirachel",
    lastName: "Sauce",
    email: "hellaspicy@gmail.com",
    password: "N0tTapat!o",
    neighborhood: "Sunset",
    bio:
      "I actually know how to recycle. Down for any task except for feeding rodents.",
    photoUrl: "https://photobucket.com/yum",
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
    date: Date()
  },
  {
    firstName: "Siberyan",
    lastName: "Husky",
    email: "shusky@gmail.com",
    password: "Wh!teClaw7",
    neighborhood: "Sunset",
    bio: "A regular human bean",
    photoUrl: "https://tinypic.com/f",
    date: Date()
  },
  {
    firstName: "Drew",
    lastName: "Hermit",
    email: "dhermit@gmail.com",
    password: "Pa$$word",
    neighborhood: "SOMA",
    bio: "A lean, clean, human bean",
    photoUrl: "https://images.google.com",
    date: Date()
  }
];

db.Users.deleteMany({})
  .then(() => db.Users.insertMany(usersSeed))
  .then(data => {
    console.log(data + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
