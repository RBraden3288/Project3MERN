// get access to validation files created (validation > login.js + register.js)
const validateRegisterLoginInput = require("../validation");

// requiring necessary dependencies for auth
// const express = require("express");
// const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretOrKey = process.env.secretOrKey;

//   requiring User model
const db = require("../models");

module.exports = {
  create: function(req, res) {
    const { errors, isValid } = validateRegisterLoginInput.register(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // look for the user in the db
    // if they're found, don't register them (again)
    // otherwise, use the model to put them into the db
    db.Users.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new db.Users({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
          // input all the other things to register about the user as well?
        });

        // hash password before save to db
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });

        // return res.status(200).json("User successfully created!");
      }
    });
  },
  signIn: function(req, res) {
    const { errors, isValid } = validateRegisterLoginInput.login(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    db.Users.findOne({ email }).then(user => {
      if (!user) {
        return res.status(400).json({ email: "Email not found" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // bc the user matched, make the JWT Payload
          const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName
          };

          jwt.sign(
            payload,
            secretOrKey,
            { expiresIn: 31556926 },
            (err, token) => {
              res
                .json({
                  success: true,
                  headerToken: "Bearer " + token,
                  token: token
                })
                .catch(err => console.log(err));
            }
          );

          //   return res.status(200).send("User successfully logged in!");
        } else {
          return res.status(400).json({ password: "Password incorrect" });
        }
      });
    });
  }
};
