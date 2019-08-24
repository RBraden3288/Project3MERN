import axios from "axios";
import jwtDecode from "jwt-decode";

const stringify = JSON.stringify;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const auth = {
  getJwt() {
    return localStorage.getItem("jwtToken");
  },

  getCurrentUser() {
    const jwt = auth.getJwt();

    if (jwt === undefined) {
      return null;
    }

    const decodedJwt = jwtDecode(jwt);
    console.log("decoded jwt: ", decodedJwt);
    return decodedJwt;
  },

  setAuthHeader(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },

  logUserIn(userInfo) {
    return axios.post("/api/auth/login", userInfo).then(res => {
      console.log(res);
      const token = res.data.token;
      const headerToken = res.data.headerToken;
      console.log("here is user's token: ", token);
      console.log(headerToken);

      localStorage.setItem("jwtToken", stringify(token));
      console.log("we stored it in local storage now!");
      this.setAuthHeader(headerToken);
      console.log("now requests will be authorized");

      const currentUserObject = this.getCurrentUser();
      console.log("current user object: ", currentUserObject);

      return Promise.resolve(currentUserObject);
    });
  },

  logOutUser() {
    return localStorage.removeItem("jwtToken");
  }
};

export default auth;
