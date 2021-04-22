// Import dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

// Configure environmental variables
require("dotenv").config();

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

// Import API and React routes
app.use(routes);

// Connect to database
mongoose.connect(
  process.env.MONGODB_URI || 
  `mongodb://${process.env.LOCALDB_HOST}/${process.env.LOCALDB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start listening...
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});