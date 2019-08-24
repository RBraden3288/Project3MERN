// ---------------- use / export backend routes we just made  ----------------

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// JASA API Routes
router.use("/api", apiRoutes);

module.exports = router;
