// Import Express router and gig routes
const router = require("express").Router();
const gigRoutes = require("./gigs");

// Gig routes
router.use("/gigs", gigRoutes);

// Export the summed API router
module.exports = router;