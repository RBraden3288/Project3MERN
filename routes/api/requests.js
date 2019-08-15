// ACTION ITEM: TEST & CONFIRM THAT THESE ROUTES ARE APPROPRIATE

const requestsControllers = require("../../controllers/requestsControllers");
const router = require("express").Router();

// "/" is the equivalent of api/requests
// Think in terms of the dashboard -- Should be able to:
// READ, UPDATE, AND DELETE REQUESTS
// router.route("/").get(requestsControllers.findAllRequests);
// router.route("/").get(requestsControllers.findByRequestId);
// router.route("/").post(requestsControllers.updateRequest);
// router.route("/").post(requestsControllers.removeRequest);

// CREATE REQUEST *might* have to be on a different route b/c the request form is on a diff. page than the dashboard.
// router.route("/create").post(requestsControllers.createRequest);

// Actually, it might make more sense to have create be the "/" route b/c everything else comes after it.

router
  .route("/")
  .get(requestsControllers.findAllRequests)
  .post(requestsControllers.createRequest);

// RACHEL: When I search by a user ID I seeded, it's not picking up the request...
router
  .route("/:id")
  .get(requestsControllers.findByRequestId)
  .put(requestsControllers.updateRequest)
  .delete(requestsControllers.removeRequest);

module.exports = router;
