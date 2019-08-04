// FILE BRINGING US CLOSER TO ORM
    // this file creates db queries based on the schema(s) in our models directory

    // ---------------- REQUIRE SCHEMAS (FROM MODELS)  ----------------
// const db = require("../models");


    // ---------------- CREATING ALL OF THE DB QUERIES  ----------------
            // copied and pasted from booksapp -- needs to be customized for our app
            
// module.exports = {
//     findAll: function(req, res) {
//       db.Book
//         .find(req.query)
//         .sort({ date: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res) {
//       db.Book
//         .findById(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     create: function(req, res) {
//       db.Book
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     update: function(req, res) {
//       db.Book
//         .findOneAndUpdate({ _id: req.params.id }, req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     remove: function(req, res) {
//       db.Book
//         .findById({ _id: req.params.id })
//         .then(dbModel => dbModel.remove())
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     }
//   };