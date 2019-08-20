// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// "/" is the equivalent of api/requests

// DASHBOARD
// GET ALL USER'S REQS
router.route("/userID/:userID").get(requestsControllers.getUserRequests);

// UPDATE, DELETE REQUESTS
router
  // IDEAL VERSION
  // .route("/userID/:userID/:requestID")
  // ESSENTIAL VERSION
  .route("/userID/:requestID")
  .put(requestsControllers.updateUserRequests)
  .delete(requestsControllers.removeUserRequest);

// FOR REQUEST FORM
// READ REQUESTS --FOR TESTING (COMMENTED OUT),
// CREATE (NEW) REQUEST
router
  .route("/:userID")
  // .get(requestsControllers.findAllRequests)
  .post(requestsControllers.createRequest);

// router
//   .route("/:id")
//   .get(requestsControllers.findByRequestId)
//   .put(requestsControllers.updateRequest)
//   .delete(requestsControllers.removeRequest);

// DASHBOARD

module.exports = router;
