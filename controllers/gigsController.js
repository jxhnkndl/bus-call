// Import models
const db = require("../models");

// Create gig controller methods
module.exports = {
  getAll: async function (req, res) {
    try {
      const gigs = await db.Gig.find({});
      res.json(gigs);
    } catch(err) {
      console.log(err);
    }
  }
}