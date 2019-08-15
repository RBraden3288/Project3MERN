// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

// "/" is the equivalent of api/users
// We really only want to be able to find users & create:
// router.route("/").get(usersControllers.findAllUsers);
// router.route("/").get(usersControllers.findUserById);
// router.route("/").post(usersControllers.createUser);

// Still need to see if I need additional code for find by neighborhood

router
  .route("/")
  .get(usersControllers.findAllUsers)
  .post(usersControllers.createUser);

router.route("/:id").get(usersControllers.findUserById);
//   .put(usersControllers.updateUser);

// get all users that are in the same neighborhood as the current user
router.get("/:id/match", usersControllers.findByNeighborhood);

// Get all requests that this client has submitted
router.get("/:id/requests", usersControllers.getUsersRequests);

module.exports = router;
