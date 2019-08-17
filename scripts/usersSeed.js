// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT
require("dotenv").config();
var mongoose = require("mongoose");
const db = require("../models");

// require bcrypt to hash passwords
// Use bcrypt to hash passwords
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const myPlaintextPassword = "s0//P4$$w0rD";

// RACHEL >> Might need to put the URI key in here, too.
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Need to get the hashing to work for seeded data
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
const usersSeed = [
  {
    firstName: "Srirachel",
    lastName: "Sauce",
    email: "hellaspicy@gmail.com",
    neighborhood: "Sunset",
    bio:
      "I actually know how to recycle. Down for any task except for feeding rodents.",
    skills: "Recycling, cleaning.",
    photoUrl: "https://photobucket.com/yum",
    password: "N0tTapat!o",
    date: Date()
  },
  {
    firstName: "Koko",
    lastName: "Dash",
    email: "kdash@gmail.com",
    neighborhood: "SOMA",
    bio: "Like a good neighbor, I'm there.",
    skills: "I'm a pet guru.",
    photoUrl: "https://photobucket.com/yummy",
    password: "Passw0rd",
    date: Date()
  },
  {
    firstName: "Siberyan",
    lastName: "Husky",
    email: "shusky@gmail.com",
    neighborhood: "Sunset",
    residenceType: "Entire home",
    entryType: "Key/Lockbox",
    bio: "A regular human bean",
    photoUrl: "https://tinypic.com/f",
    password: "Wh!teClaw7",
    date: Date()
  },
  {
    firstName: "Drew",
    lastName: "Hermit",
    email: "dhermit@gmail.com",
    neighborhood: "SOMA",
    residenceType: "Flat",
    entryType: "Doorman/Property Manager",
    bio: "A lean, clean, human bean",
    photoUrl: "https://images.google.com",
    password: "Pa$$word",
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
// });
