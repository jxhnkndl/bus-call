// Import modules
const mongoose = require("mongoose");

// Extract Schema constructor
const Schema = mongoose.Schema;

// Create Gig document schema
const gigSchema = new Schema({
  date: { type: Date, default: Date.now },
  venue: { type: String, required: true },
  city: { type: String, required: true },
  doors: { type: String },
  setlist: [{ type: String }]
});

// Compile Gig model
const Gig = mongoose.model("Gig", gigSchema);

// Export Gig model
module.exports = Gig;