// Import models
const db = require('../models');

// Create gig controller methods
module.exports = {
  getAll: async function (req, res) {
    try {
      const results = await db.Gig.find({}).sort({ date: 1 });
      res.json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: err });
    }
  },
  create: async function (req, res) {
    try {
      const results = await db.Gig.create(req.body);
      res.json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: err });
    }
  },
  delete: async function (req, res) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const results = await db.Gig.deleteOne({ _id: id });
      res.json({ success: true, msg: results })
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: err });
    }
  }
};
