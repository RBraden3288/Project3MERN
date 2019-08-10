// RACHEL
const router = require("express").Router();

const usersControllers = require("../../controllers/usersControllers");

router.route("/").get(usersControllers.findAll);

module.exports = router;
