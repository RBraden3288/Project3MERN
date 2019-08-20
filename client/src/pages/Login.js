import React, { Component } from "react";
import NavigationBar from "../components/Navbar/";
import LoginGrid from "../components/LoginGrid";
import CarouselRS from "../components/Carousel";
import auth from "../utils/auth";

import "../index.css";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
//   }

//   componentDidMount() {
//     // check to see if there is a token (i.e. if the user has already logged in)
//     // if so, set the current user to be this user using their token
//     // (i.e. run the current user function --
//     // which will decode the user's token from localStorage or return null
//     // --> if this returns a truthy value (meaning there's a current user)
//     // --> authorize the user's requests using their token
//     var token = auth.getJwt();

//     if (token) {
//       console.log("Here are my props:", this.props);
//       auth.setAuthHeader(token);
//       // console.log(token.exp);
//       var currentUser = auth.getCurrentUser();
//       console.log(currentUser);

//       // this.setState(currentUser);
//       window.location.href = "/dashboard/:id";
//       // this.props.history.push("/about");
//     } else if (currentUser && currentUser.exp < Date.now() / 1000) {
//       auth.logOutUser();
//       window.location.href = "/";
//     } else {
//       console.log("User is not logged in");
//     }
//   }

//   render() {
//     return (
//       <div>
//         {console.log("props i LoginSignup", this.props)}
//         <NavigationBar />
//         <CarouselRS />
//         <br />
//         <LoginGrid
//           {...this.props}
//           // login={props.login}
//           // authenticatedRedirect={props.redirectToReferrer}
//         />
//       </div>
//     );
//   }
// }

const Login = props => (
  <div>
    {console.log("props i LoginSignup", props)}
    <NavigationBar />
    <CarouselRS />
    <br />
    <LoginGrid
      login={props.login}
      // login={props.login}
      // authenticatedRedirect={props.redirectToReferrer}
    />
  </div>
);

export default Login;
