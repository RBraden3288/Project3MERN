// RACHEL

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

router.route("/").get(requestsControllers.findAll);
// router.route("/create").post(requestsControllers.create);
// router.route("/user/:clientId").post(requestsControllers.findRequestbyUserId);

module.exports = router;

// ** JASA, I'll need to get your opinion on what's the most appropriate route for this.
