// ---------------- DEFINE DEPENDENCIES USING SAVVY ES6  ----------------
// Express
const express = require("express");
// .env
require("dotenv").config();
// Mongoose
const mongoose = require("mongoose");

// ---------------- ROUTES(?), APP, PORT ----------------
// Not sure if we'll need a routes const b/c we're not dealing with API...
// However, the more I think about it, we may need this anyway since we'll probably want to seed in some attendant data
    // JASA RESPONSE: will need routes -- we are making our own API that we are dealing with!

// require routes + initialize our instance of express
const routes = require("./routes");
const app = require("express");

// PORT
const port = process.env.PORT || 3001;

// ---------------- DEFINE MIDDLEWARE ----------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static assets (Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Again, if we end up using routes, then this will be used for
// both API and view
app.use(routes);

// ---------------- CONNECT TO MONGO DB ----------------
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/[INSERTNAMEHERE]"
);

// ---------------- START API SERVER ----------------
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// ACTION ITEMS: 
    // auth items installed here (Jasa)
    // change name of db (Rachel)
    // give us the link we need to put in .env to state what MONGODB_URI equals (Rachel)