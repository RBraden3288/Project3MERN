// FILE BRINGING US CLOSER TO ORM
// this file creates db queries based on the schema(s) in our models directory
// May only use the portion to find all attendants / by their IDs + create them

// ---------------- REQUIRE SCHEMAS (FROM MODELS)  ----------------
const db = require("../models");

// ---------------- CREATING ALL OF THE DB QUERIES  ----------------

module.exports = {
  // Find all users in our DB (client, attendant)
  findAllUsers: function(req, res) {
    console.log("db.User", db.User);
    db.User.find(req.params.id)
      // sort by most recently updated
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find all users by their ID
  findUserById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // READ Matching Client w/ Potential Attendants
  findByNeighborhood: function(req, res) {
    console.log("Neighborhood", req.params);
    db.User.find(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // CREATE a user, using the sign-up page
  createUser: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // CREATE a request
  createRequest: function(req, res) {
    const userId = req.params.id;
    console.log("db.Request", req.body);

    const requestData = req.body;

    // Link user id to request
    requestData.userID = userId;

    db.Request.create(requestData)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  // 
  getUserRequests: function(req, res) {
    res.json(["data"]);
    // console.log("db.Request", db.Request);
    // db.Request
    //   .find(req.params.id)
    //   .sort({ neighborhood })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};