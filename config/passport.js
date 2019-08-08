const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Client = require("../models/client");
// OR above: const Client = mongoose.model("clients");
require("dotenv").config();
const secretOrKey = process.env.secretOrKey;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrKey;

module.exports = passport => {
    passport.use(
        newJwtStrategy(opts, (jwt_payload, done) => {
            Client.findById(jwt_payload.id)
            .then(client => {
                if (client) {
                    return done(null, client);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};