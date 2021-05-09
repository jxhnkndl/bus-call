// Import dependencies
const mongoose = require("mongoose");

// Extract Schema constructor
const Schema = mongoose.Schema;

// Define model for documents inserted into the gigs collection
const gigSchema = new Schema({
  date: { type: Date, default: Date.now },
  venue: {
    name: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    capacity: { type: String, default: '0' },
    presale: { type: String, default: '0' },
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
  }]
});

// Compile Gig model
const Gig = mongoose.model("Gig", gigSchema);

// Export Gig model
module.exports = Gig;