// we'll be requiring axios

import axios from "axios";

export default {
  signInUser: function(userInfo) {
    return axios.post("/api/user/login", userInfo);
  },
  registerUser: function(userInfo) {
    return axios.post("/api/users/register", userInfo);
  }
};

// If we were, then it'd look something like...

// import axios from "axios";
// export default {
// -- insert CRUD here --
// }

// JASA RESPONSE -- we will need axios for frontend HTTP requests
// HTTP  requests on frontend will tell our backend how to respond
