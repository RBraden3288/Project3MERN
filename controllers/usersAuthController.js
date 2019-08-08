//     // get access to validation files created (validation > login.js + register.js)
// const validateRegisterLoginInput = require("../../validation/index");


// // requiring necessary dependencies for auth
// const express = require("express");
// const router = require("express").Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// //   requiring User model
// const db = require("../models");

// module.exports = {
//     create: function(req, res) {
//         const { errors, isValid } = validateRegisterLoginInput(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//         // look for the user in the db
//             // if they're found, don't register them (again)
//             // otherwise, use the model to put them into the db
//         db.User.findOne({ email: req.body.email }).then(user => {
//             if (user) {
//                 return res.status(400).json({ email: "Email already exists"});
//             } else {
//                 const newUser = new User({
//                     firstName: req.body.firstName,
//                     lastName: req.body.lastName,
//                     email: req.body.email,
//                     password: req.body.password
//                 });

//                 // hash password before save to db
//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(newUser.password, salt, (err, hash) => {
//                         if (err) throw err;
//                         newUser.password = hash;
//                         newUser
//                             .save()
//                             .then(user => res.json(user))
//                             .catch(err => console.log(err));
//                     });
//                 });
//             }
//         });
//     }
// };