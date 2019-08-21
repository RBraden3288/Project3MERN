// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// "/" is the equivalent of api/requests

// DASHBOARD
// CREATE, UPDATE, DELETE REQUESTS
// needs to be more specific so it references both userID and request ID ("/userID/:userID/:requestID")
// router
//   .route("/userID/:userID/")
//   .get(requestsControllers.getUserRequests)
//   .put(requestsControllers.updateUserRequests)
//   .delete(requestsControllers.removeUserRequest);

// FOR REQUEST FORM
// READ REQUESTS, CREATE (NEW) REQUEST
// change the route so it's .route("/:userID")
router
  .route("/")
  .get(requestsControllers.findAllRequests)
  .post(requestsControllers.createRequest);

// DASHBOARD
router
  .route("/:id")
  .get(requestsControllers.findByRequestId)
  .put(requestsControllers.updateRequest)
  .delete(requestsControllers.removeRequest);

// DASHBOARD - FIND ALL USER REQUESTS
router.route("/userID/:userID").get(requestsControllers.getUserRequests);

module.exports = router;
