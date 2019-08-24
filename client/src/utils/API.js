import axios from "axios";

export default {
  //save user's request to db
  createRequest: function(user_id, request) {
    return axios.post("/api/users/" + user_id + "/requests", request);
  },
  getUserRequests: function(user_id) {
    return axios.get("/api/users/" + user_id + "/requests");
  },
  //get request by id
  getRequest: function(requestid) {
    return axios.get("/api/requests/" + requestid);
  },
  //delete a request
  deleteRequest: function(requestid) {
    return axios.delete("/api/requests/" + requestid);
  },
  // update a request
  updateRequest: function(requestid) {
    return axios.put("/api/requests/" + requestid);
  },
  // AUTH
  signInUser: function(userInfo) {
    return axios.post("/api/auth/login", userInfo);
  },
  registerUser: function(userInfo) {
    return axios.post("/api/auth/register", userInfo);
  }
};
