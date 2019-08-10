// ---------------- use / export backend routes we just made  ----------------

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// RACHEL
const userRoutes = require("./users");
const requestsRoutes = require("./requests");

// JASA API Routes
router.use("/api", apiRoutes);

// RACHEL API ROUTES -- need to confirm if this is correct
router.use("/users", userRoutes);
router.use("/requests", requestsRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/src/pages/about"));
//     // res.render("../client/src/App");
// });

module.exports = router;

// ACTION ITEMS
// customize code per our app (Jasa)
