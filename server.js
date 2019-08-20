// ---------------- DEFINE DEPENDENCIES USING SAVVY ES6  ----------------

// Express
const express = require("express");
// .env
require("dotenv").config();
// Mongoose
const mongoose = require("mongoose");
// Middleware needed for authentication
const bodyParser = require("body-parser");
// Logging so that we can review our calls
const morgan = require("morgan");
const passport = require("passport");
// Initializing our instance of express
const app = express();
// relative path module needed for heroku deploy
const path = require("path");

// Calling the morgan dependency for error logging
app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ---------------- ROUTES(?), APP, PORT ----------------
// Not sure if we'll need a routes const b/c we're not dealing with API...
// However, the more I think about it, we may need this anyway since we'll probably want to seed in some attendant data
// JASA RESPONSE: will need routes -- we are making our own API that we are dealing with!

// require routes + initialize our instance of express
const routes = require("./routes");

// PORT
const PORT = process.env.PORT || 3001;
// const PORT = 3001; - just in case for testing

// ---------------- DEFINE MIDDLEWARE ----------------
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Static assets (Heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// NOTE: have input the bodyParser middleware bc that's what was used in auth learning accessed
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Again, if we end up using routes, then this will be used for
// both API and view
app.use(routes);

// ---------------- CONNECT TO MONGO DB ----------------
// WILL NEED TO CHANGE NAME OF DB TO COMMON NAMES!
// connect to the db and confirm so

// TO-DO: RACHEL >> save db name as a key, config.mongoURI
// Put the key into Config > index.js
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// HEROKU CODE - needs to be below routes so doesn't override routes
// this checks if our app is currently in production (aka on Heroku)
// process.env.NODE_ENV is an environment var from heroku
// if yes, we are bringing the React app's server into our server
// do this by creating a build folder inside of our client folder, and invoking that here
// next line says that any routes that user goes that's not related to specified routes, will take them to the React app/send them the HTML file
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// ---------------- START API SERVER ----------------
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// ACTION ITEMS:
// auth items installed here (Jasa)
// change name of db (Rachel)
// give us the link we need to put in .env to state what MONGODB_URI equals (Rachel)
