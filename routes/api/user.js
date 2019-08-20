// ---------------- BACKEND ROUTING  ----------------
// while utils > API.js handles HTTP requests coming from the frontend, this handles the routing via express, which the server needs
const router = require("express").Router();

// requiring access to CRUD queries of db
const clientAuthController = require("../../controllers/usersAuthController");

router.route("/login").post(clientAuthController.signIn);
// router.post("/login", (req, res) => {
//   res.json({ hey: "hey" });
// });

router.route("/register").post(clientAuthController.create);

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

// ACTION ITEMS
// double check that file path is correct to usersController (Jasa)
// update the router code to meet our app naming conventions (Jasa)
// add any routes necessary (Jasa)
