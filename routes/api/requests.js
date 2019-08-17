// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// "/" is the equivalent of api/requests

// FOR REQUEST FORM
// READ REQUESTS, CREATE (NEW) REQUEST
router
  .route("/")
  .get(requestsControllers.findAllRequests)
  .post(requestsControllers.createRequest);

// DASHBOARD
// CREATE, UPDATE, DELETE REQUESTS
router
  .route("/:id")
  .get(requestsControllers.findByRequestId)
  .put(requestsControllers.updateRequest)
  .delete(requestsControllers.removeRequest);

module.exports = router;
