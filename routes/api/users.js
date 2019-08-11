// RACHEL
const router = require("express").Router();

const usersControllers = require("../../controllers/usersControllers");

router.route("/").get(usersControllers.findAllUsers);

module.exports = router;
