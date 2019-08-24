// ---------------- BACKEND ROUTING  ----------------
// while utils > API.js handles HTTP requests coming from the frontend, this handles the routing via express, which the server needs
const router = require("express").Router();

// requiring access to CRUD queries of db
const clientAuthController = require("../../controllers/usersAuthController");

router.route("/login").post(clientAuthController.signIn);

router.route("/register").post(clientAuthController.create);

module.exports = router;
