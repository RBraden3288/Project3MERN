// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const router = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");

// "/" is the equivalent of api/users
// We really only want to be able to find users & create:
router.route("/").get(usersControllers.findAllUsers);
router.route("/").get(usersControllers.findUserById);
router.route("/").post(usersControllers.createUser);

// Still need to see if I need additional code for find by neighborhood
router.route("/match").get(usersControllers.findByNeighborhood);

module.exports = router;
