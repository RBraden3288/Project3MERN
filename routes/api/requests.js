const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// NOTE: "/" is the equivalent of api/requests

// --------------------------- REQUEST FORM --------------------------
// READ ALL REQUESTS
router.route("/").get(requestsControllers.findAllRequests);
// .post(requestsControllers.createRequest);

// ----------------------------- DASHBOARD ----------------------------
// READ, UPDATE, AND DELETE A SINGLE REQUEST
router
  // .route("/:id")
  .route("/:userID/requests")
  .get(requestsControllers.findByUserId);

router
  // .route("/:id")
  .route("/:requestID")
  .get(requestsControllers.findByRequestId)
  .put(requestsControllers.updateRequest)
  .delete(requestsControllers.removeRequest);

module.exports = router;
