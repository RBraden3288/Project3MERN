// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

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

// -------------------------- REQUEST PAGE ------------------------------------------
// READ ALL REQUESTS BY A USER ... and CREATE A REQUEST
router
  .route("/:userID/requests")
  .get(usersControllers.getUserRequests)
  .post(usersControllers.createRequest);

// ------------------------------- MATCHING ------------------------------------------
// Get all users that are in the same neighborhood as the current user
router.get("/neighborhood/:neighborhood", usersControllers.findByNeighborhood);

// EXPERIMENTAL???
// router
//   .route("/:userID/requests")
//   // .get(usersControllers.getUserRequests)
//   .post(usersControllers.createRequest);

// moving this to requests
// router.get("/:id/requests", usersControllers.getUsersRequests);

module.exports = router;
