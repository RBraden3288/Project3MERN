// FILE BRINGING US CLOSER TO ORM
// Need to be able to CRUD requests
// this file creates db queries based on the schema(s) in our models directory

// ---------------- REQUIRE SCHEMAS (FROM MODELS)  ----------------
const db = require("../models");

// ---------------- CREATING ALL OF THE DB QUERIES  ----------------

// (RACHEL) ACTION ITEM: Make sure all of this works
module.exports = {
  // test: function(req, res) {
  //   console.log("test*");
  //   res.status(200);
  // },
  // READ requests from the Request Collection
  findAllRequests: function(req, res) {
    console.log("db.Request", db.Request);
    db.Request.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // READ a specific request
  findByRequestId: function(req, res) {
    db.Request.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // CREATE request using Request Form
  createRequest: function(req, res) {
    db.Request.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // UPDATE request made
  updateRequest: function(req, res) {
    db.Request.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // DELETE request
  removeRequest: function(req, res) {
    db.Request.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserRequests: function(req, res) {
    console.log("Here you go", req.params);
    db.Request.find(req.params)
      .then(dbModel => {
        console.log("dbModel", dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }

  // READ all requests a client submitted
  // getUserRequests: function(req, res) {
  //   console.log("Here you go", req.params);
  //   db.Request.find(req.params)
  //     .then(dbModel => {
  //       console.log("dbModel", dbModel);
  //       res.json(dbModel);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  // // DELETE request
  // removeUserRequest: function(req, res) {
  //   console.log("Removing", req.params);
  //   db.Request.remove(req.params)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // // UPDATE request made
  // updateUserRequests: function(req, res) {
  //   console.log("Updating", req.params, req.body);
  //   db.Request.findOneAndUpdate(req.params, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
