// ---------------- use / export backend routes we just made  ----------------

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// JASA API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/src/pages/about"));
//     // res.render("../client/src/App");
// });

module.exports = router;

// ACTION ITEMS
// customize code per our app (Jasa)
