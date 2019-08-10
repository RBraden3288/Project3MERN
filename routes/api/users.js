// RACHEL

const usersControllers = require("../../controllers/usersControllers");
const router = require("express").Router();
router.route("/").get(usersControllers.findAll);

module.exports = router;
