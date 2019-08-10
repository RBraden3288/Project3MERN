// RACHEL

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();
router.route("/requests").get(requestsControllers.findAll);

module.exports = router;

// ** JASA, I'll need to get your opinion on what's the most appropriate route for this.
