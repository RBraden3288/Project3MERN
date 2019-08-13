import axios from "axios";
import frontendAPI from "./API";
import jwtDecode from "jwt-decode";

const parse = JSON.parse;
const stringify = JSON.stringify;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const auth = {
  // get the item out of local storage if it's there; otherwise return null
  getJwt() {
    // if (localStorage && localStorage.getItem(token)) {

    return localStorage.getItem("jwtToken");
    // )
    // || null;
    // }

    //     // if (sessionStorage && sessionStorage.getItem(key)) {
    //     //   return parse(sessionStorage.getItem(key)) || null;
    //     // }

    // return null;
  },

  // IS NEEDED?
  // setJwt(token) {

  // }

  getCurrentUser() {
    const jwt = auth.getJwt();

    if (!jwt) {
      return null;
    }

    const decodedJwt = jwtDecode(jwt);
    console.log(decodedJwt);
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
    // console.log(frontendAPI.signInUser);
    return (
      axios
        .post("/api/auth/login", userInfo)
        // frontendAPI
        // .signInUser(userInfo)
        .then(res => {
          console.log(res);
          const { token } = res.data.token;
          console.log("here is user's token: ", res.data.token);

          localStorage.setItem("jwtToken", stringify(token));
          this.setAuthHeader(token);

          const currentUserObject = this.getCurrentUser(token);
          console.log(currentUserObject);

          return Promise.resolve(currentUserObject);
        })
      // .catch(err => {
      //   console.dir(err);
      // })
    );
  },

  logOutUser() {
    // if (localStorage && localStorage.getItem(key)) {
    return localStorage.removeItem("jwtToken");
    // }
  }
};

export default auth;

// CODE FROM WITH LINO / VIVIAN THAT WORKED SOMEWHAT

// import isEmpty from "lodash/isEmpty";
// // import axios from "axios";
// // jwt library
// // parse token

// const TOKEN_KEY = "jwtToken";
// const USER_INFO = "userInfo";

// const parse = JSON.parse;
// const stringify = JSON.stringify;

// const auth = {
//   /**
//    * Remove an item from the used storage
//    * @param  {String} key [description]
//    */
//   clear(key) {
//     if (localStorage && localStorage.getItem(key)) {
//       return localStorage.removeItem(key);
//     }

//     // if (sessionStorage && sessionStorage.getItem(key)) {
//     //   return sessionStorage.removeItem(key);
//     // }

//     return null;
//   },

//   /**
//    * Clear all app storage
//    */
//   clearAppStorage() {
//     if (localStorage) {
//       localStorage.clear();
//     }

//     // if (sessionStorage) {
//     //   sessionStorage.clear();
//     // }
//   },

//   clearToken(tokenKey = TOKEN_KEY) {
//     axios.defaults.headers.common["Authorization"] = "";
//     return auth.clear(tokenKey);
//   },

//   clearUserInfo(userInfo = USER_INFO) {
//     return auth.clear(userInfo);
//   },

//   /**
//    * Returns data from storage
//    * @param  {String} key Item to get from the storage
//    * @return {String|Object}     Data from the storage
//    */
//   get(key) {
//     if (localStorage && localStorage.getItem(key)) {
//       return parse(localStorage.getItem(key)) || null;
//     }

//     // if (sessionStorage && sessionStorage.getItem(key)) {
//     //   return parse(sessionStorage.getItem(key)) || null;
//     // }

//     return null;
//   },

//   getToken(tokenKey = TOKEN_KEY) {
//     return auth.get(tokenKey);
//   },

//   getUserInfo(userInfo = USER_INFO) {
//     return auth.get(userInfo);
//   },

//   /**
//    * Set data in storage
//    * @param {String|Object}  value    The data to store
//    * @param {String}  key
//    * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
//    */
//   set(value, key, isLocalStorage = true) {
//     if (isEmpty(value)) {
//       return null;
//     }

//     if (isLocalStorage && localStorage) {
//       return localStorage.setItem(key, stringify(value));
//     }

//     // if (sessionStorage) {
//     //   return sessionStorage.setItem(key, stringify(value));
//     // }

//     return null;
//   },

//   setToken(value = "", isLocalStorage = true, tokenKey = TOKEN_KEY) {
//     axios.defaults.headers.common["Authorization"] = value;
//     return auth.set(value, tokenKey, isLocalStorage);
//   },

//   logUserIn(userInfo) {
//     return axios
//       .post("http://localhost:3001/api/users/login", userInfo)
//       .then(result => {
//         console.log("HERE IS JASA TOKEN", result.data.token);

//         auth.setToken(result.data.token);

//         // decode the token
//         const userObject = "";
//         // pass user object to app
//         return Promise.resolve(userObject);
//       })
//       .catch(console.error);
//   }

//   // setUserInfo(value = "", isLocalStorage = false, userInfo = USER_INFO) {
//   //   return auth.set(value, userInfo, isLocalStorage);
//   // }
// };

// export default auth;
