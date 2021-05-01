// Import models
const db = require('../models');

// Create gig controller methods
module.exports = {
  getAll: async function (req, res) {
    try {
      const gigs = await db.Gig.find({});
      res.json(gigs);
    } catch (err) {
      console.log(err);
    }
  },
  create: async function (req, res) {
    try {
      console.log(req.body);
      const gig = await db.Gig.create(req.body);
      res.json(gig);
    } catch (err) {
      console.log(err);
    }
  },
};
