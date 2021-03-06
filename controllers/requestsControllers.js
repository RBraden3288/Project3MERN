// FILE BRINGING US CLOSER TO ORM
// Need to be able to CRUD requests
// this file creates db queries based on the schema(s) in our models directory

// ---------------- REQUIRE SCHEMAS (FROM MODELS)  ----------------
const db = require("../models");

// ---------------- CREATING ALL OF THE DB QUERIES  ----------------

// (RACHEL) ACTION ITEM: Make sure all of this works
module.exports = {
  // READ requests from the Request Collection
  findAllRequests: function(req, res) {
    db.Request.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // READ a specific request
  findByRequestId: function(req, res) {
    // This actually can be called requestID b/c of .findbyId
    db.Request.findById(req.params.requestID)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // UPDATE request made
  updateRequest: function(req, res) {
    // console.log("req.params.requestID", req.params.requestID);
    // console.log("req.body", req.body);
    db.Request.findOneAndUpdate({ _id: req.params.requestID }, req.body, {
      upsert: true
    })
      .then(dbModel => {
        // console.log("dbModel", dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  // DELETE request
  removeRequest: function(req, res) {
    db.Request.findById({ _id: req.params.requestID })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
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
