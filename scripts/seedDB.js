// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");

// Is there something that I should call it in order to call both users/requests
// Is what I have currently existing fine?
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

const userSeed = [
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
    firstName: "Srirachel",
    lastName: "Sauce",
    email: "hellaspicy@gmail.com",
    password: "N0tTapat!o",
    bio:
      "I actually know how to recycle. Down for any task except for feeding rodents.",
    photoUrl: "https://photobucket.com/yum",
    date: Date()
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
