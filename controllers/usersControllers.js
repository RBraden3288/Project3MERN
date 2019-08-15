// FILE BRINGING US CLOSER TO ORM
// this file creates db queries based on the schema(s) in our models directory
// May only use the portion to find all attendants / by their IDs + create them

// ---------------- REQUIRE SCHEMAS (FROM MODELS)  ----------------
const db = require("../models");

// ---------------- CREATING ALL OF THE DB QUERIES  ----------------

// (RACHEL) ACTION ITEM: Make sure all of this works
module.exports = {
  // Find all users in our DB (client, attendant)
  findAllUsers: function(req, res) {
    console.log("db.Users", db.Users);
    db.Users.find(req.params.id)
      // sort by most recently updated
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find all users by their ID
  findUserById: function(req, res) {
    db.Users.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // READ Matching Client w/ Potential Attendants
  findByNeighborhood: function(req, res) {
    db.Users.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // CREATE a user, using the sign-up page
  createUser: function(req, res) {
    db.Users.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // READ all requests that the client submitted
  getUsersRequests: function(req, res) {
    db.Users.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // Not sure if we'll need the following functions
  // These would be to delete a user or update their information
  // updateUser: function(req, res) {
  //   db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // removeUser: function(req, res) {
  //   db.Users.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
