// we'll be requiring axios

// If we were, then it'd look something like...

// import axios from "axios";
// export default {
// -- insert CRUD here --
// }

import axios from "axios";

export default {
    //login/ sign in already created in utils/auth.js logUserIn(), signIn
    //save user to db
    ["Method"]: function (user_id) {
        return axios.post("/" + user_id)
    },
    //get user by id
    getUser: function (id) {
        return axios.get("/api/users" + id)
    },
    //save user's request to db
    ["Method"]: function (request_id) {
        return axios.post("/api/[link end point]" + request_id)
    },
    //get request by id
    getRequest: function (id) {
        return axios.get("/api/[link end point]" + id)
    },
    //delete a request
    deleteRequest: function(id) {
        return axios.delete("/api/requests" + id)
    }

}

// JASA RESPONSE -- we will need axios for frontend HTTP requests
    // HTTP  requests on frontend will tell our backend how to respond
