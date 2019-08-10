// ---------------- TAKE WHAT DID IN api>user.js (i.e. other file in this folder)  ----------------

const router = require("express").Router();
const authRoutes = require("./user");

// RACHEL
const userRoutes = require("./users");
const requestsRoutes = require("./requests");

// JASA
router.use("/users", authRoutes);
// RACHEL API ROUTES
router.use("/users", userRoutes);
router.use("/requests", requestsRoutes);
// router.use("/requests",/ (req, res) => res.json({ ok: true }));

module.exports = router;

// ** JASA, is it conflicting if mine is also "/users"?

// ACTION ITEMS
// customize code per our app (Jasa)
