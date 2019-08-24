// ---------------- TAKE WHAT DID IN api>user.js (i.e. other file in this folder)  ----------------

const router = require("express").Router();
const authRoutes = require("./user");

const userRoutes = require("./users");
const requestsRoutes = require("./requests");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/requests", requestsRoutes);

module.exports = router;
