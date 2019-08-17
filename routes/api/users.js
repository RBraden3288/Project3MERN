// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

// "/" is the equivalent of api/users
// Still need to see if I need additional code for find by neighborhood

// SIGN-UP PAGE
// FIND ALL USERS, CREATE ACCOUNT
router
  .route("/")
  .get(usersControllers.findAllUsers)
  .post(usersControllers.createUser);

// LOGIN PAGE
// FIND USER BY THEIR ID
router.route("/:id").get(usersControllers.findUserById);
// to update a user...
//   .put(usersControllers.updateUser);

// THE FOLLOWING TWO ROUTES WON'T WORK RIGHT NOW
// Get all users that are in the same neighborhood as the current user
router.get("/:id/match", usersControllers.findByNeighborhood);
// Get all requests that this client has submitted
router.get("/:id/requests", usersControllers.getUsersRequests);

module.exports = router;
