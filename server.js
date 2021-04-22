// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Config PORT variable
const PORT = process.env.PORT || 3001;

// Init Express
const app = express();

// Install body-parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start listening...
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});