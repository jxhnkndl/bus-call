// Import modules and routes
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

// Config API routes
router.use("/api", apiRoutes);

// Redirect to the React app ONLY if request doesn't hit an API route
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export router
module.exports = router;