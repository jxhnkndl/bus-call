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
    capacity: { type: Number, default: 0 },
    promoter: { type: String },
    email: { type: String }
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
  closingNumbers: {
    presale: { type: Number, default: 0 },
    doors: { type: Number, default: 0 },
    comps: { type: Number, default: 0 },
    guarantee: { type: Number, default: 0 },
    bonus: { type: Number, default: 0 },
    merch: {
      gross: { type: Number, default: 0 },
      comped: { type: Number, default: 0 },
      split: { type: Number, default: 100 },
      scans: { type: Number, default: 0 }
    }
  }
});

// Compile Gig model
const Gig = mongoose.model("Gig", gigSchema);

// Export Gig model
module.exports = Gig;