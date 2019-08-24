const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

// "/" is the equivalent of api/users

// ---------------------------------- SIGN-UP PAGE ----------------------------------
// FIND ALL USERS, CREATE ACCOUNT
router
  .route("/")
  .get(usersControllers.findAllUsers)
  .post(usersControllers.createUser);

// ----------------------------- LOGIN PAGE -----------------------------------------
// FIND USER BY THEIR ID
router.route("/:id").get(usersControllers.findUserById);
// to update a user...
//   .put(usersControllers.updateUser);

// ------------------------------- MATCHING ------------------------------------------
// Get all users that are in the same neighborhood as the current user
router.get("/neighborhood/:neighborhood", usersControllers.findByNeighborhood);

// ----------------------------- CREATE REQUEST ---------------------------------------
router
  .route("/:id/requests")
  .get(usersControllers.getUserRequests)
  .post(usersControllers.createRequest);

module.exports = router;
