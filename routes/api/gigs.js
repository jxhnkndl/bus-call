// Init Express router and gigs controller
const router = require("express").Router();
const gigsController = require("../../controllers/gigsController");

// ROUTE: "/api/gigs"
router.route("/")
  .get(gigsController.getAll)
  .post(gigsController.create);

// ROUTE: "/api/gigs/:id"
router.route("/:id")
  .put(gigsController.update)
  .delete(gigsController.delete);

// Export the router
module.exports = router;