// ---------------- TEST DATA   ----------------
// a page to input fake data in JSON FORMAT

var mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborfavors_db"
);

const clientSeed = [
  {
    firstName: "Siberyan",
    lastName: "Husky",
    email: "shusky@gmail.com",
    password: "Wh!teClaw7",
    neighborhood: "Sunset",
    bio: "A regular human bean",
    photoUrl: "https://tinypic.com/f",
    residenceType: "house",
    security: "key",
    attendant: false,
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
    residenceType: "house",
    security: "key",
    attendant: false,
    date: Date()
  }
];

db.Client.remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " user inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
