// ---------------- TAKE WHAT DID IN api>user.js (i.e. other file in this folder)  ----------------

const router = require("express").Router();
const authRoutes = require("./user");
// RACHEL
const userRoutes = require("./user");

router.use("/users", authRoutes);
// RACHEL API ROUTES
router.use("/users", userRoutes);

module.exports = router;

// ACTION ITEMS
// customize code per our app (Jasa)
