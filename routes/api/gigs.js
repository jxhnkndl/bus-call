// Init Express router and gigs controller
const router = require("express").Router();
const gigsController = require("../../controllers/gigsController");

// ROUTE: "/api/gigs"
router.route("/")
  .get(gigsController.getAll);

// Export the router
module.exports = router;