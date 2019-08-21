import axios from "axios";

// If we were, then it'd look something like...

// import axios from "axios";
// export default {
// -- insert CRUD here --
// }

export default {
  //login/ sign in already created in utils/auth.js logUserIn(), signIn
  //save user to db
  // ["Method"]: function(user_id) {
  //   return axios.post("/" + user_id);
  // },
  //get user by id
  // getUser: function(id) {
  //   return axios.get("/api/users" + id);
  // },
  //save user's request to db
  createRequest: function() {
    return axios.post("/api/requests/");
  },
  //get request by id
  getRequest: function(user_id) {
    return axios.get("/api/requests/userID/" + user_id);
  },
  //delete a request
  deleteRequest: function(user_id, request_id) {
    return axios.delete("/api/requests/userID/" + user_id + "/" + request_id);
  },
  // update a request
  updateRequest: function(user_id, request_id) {
    return axios.put("/api/requests/userID/" + user_id + "/" + request_id);
  },
  // AUTH
  signInUser: function(userInfo) {
    return axios.post("/api/auth/login", userInfo);
  },
  registerUser: function(userInfo) {
    return axios.post("/api/auth/register", userInfo);
  }
};

// JASA RESPONSE -- we will need axios for frontend HTTP requests
// HTTP  requests on frontend will tell our backend how to respond