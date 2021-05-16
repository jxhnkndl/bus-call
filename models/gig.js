// Import dependencies
const mongoose = require("mongoose");

// Extract Schema constructor
const Schema = mongoose.Schema;

// Define model for documents inserted into the gigs collection
const gigSchema = new Schema({
  date: { type: Date, default: Date.now },
  closed: { type: Boolean, default: false },
  venue: {
    name: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
  },
  catering: { type: Boolean, default: false },
  internet: { type: Boolean, default: false },
  lounge: { type: Boolean, default: false },
  showers: { type: Boolean, default: false },
  parking: { type: Boolean, default: false },
  rider: { type: Boolean, default: false },
  schedule: [{ 
    timeString: { type: String },
    event: { type: String }
  }],
  final: {
    capacity: { type: String, default: '0' },
    presale: { type: String, default: '0' },
    doors: { type: String, default: '0' },
    guarantee: { type: String, default: '0' },
    bonus: { type: String, default: '0' },
    split: {
      artist: { type: String, default: '100' },
      venue: { type: String, default: '0' }
    },
  }
});

// Compile Gig model
const Gig = mongoose.model("Gig", gigSchema);

// Export Gig model
module.exports = Gig;