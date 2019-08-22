// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// NOTE: "/" is the equivalent of api/requests

// --------------------------- REQUEST FORM --------------------------
// READ ALL REQUESTS
router.route("/").get(requestsControllers.findAllRequests);
// .post(requestsControllers.createRequest);

// CREATE A NEW REQUEST
// See createRequest.
// ----------------------------- DASHBOARD ----------------------------
// READ, UPDATE, AND DELETE A SINGLE REQUEST
router
  // .route("/:id")
  .route("/:requestID")
  .get(requestsControllers.findByRequestId)
  .put(requestsControllers.updateRequest)
  .delete(requestsControllers.removeRequest);

// READ ALL REQUESTS BY A USER ... and CREATE A REQUEST
// router.route("/userID/:userID").get(requestsControllers.getUserRequests);
router
  .route("/:userID/requests")
  .get(requestsControllers.getUserRequests)
  .post(requestsControllers.createRequest);

module.exports = router;

// CREATE, UPDATE, DELETE REQUESTS
// needs to be more specific so it references both userID and request ID ("/userID/:userID/:requestID")
// router
//   .route("/userID/:userID/")
//   .get(requestsControllers.getUserRequests)
//   .put(requestsControllers.updateUserRequests)
//   .delete(requestsControllers.removeUserRequest);