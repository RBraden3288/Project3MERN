import React, { Component } from "react";
import NavigationBar from "../components/Navbar/";
import SignUpGrid from "../components/SignupGrid";
import auth from "../utils/auth";

import "../index.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // check to see if there is a token (i.e. if the user has already logged in)
    // if so, set the current user to be this user using their token
    // (i.e. run the current user function --
    // which will decode the user's token from localStorage or return null
    // --> if this returns a truthy value (meaning there's a current user)
    // --> authorize the user's requests using their token
    var token = auth.getJwt();

    if (token) {
      console.log("Here are my props:", this.props);
      auth.setAuthHeader(token);
      // console.log(token.exp);
      var currentUser = auth.getCurrentUser();
      console.log(currentUser);

      // this.setState(currentUser);
      window.location.href = "/dashboard/:id";
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <SignUpGrid {...this.props} />
      </div>
    );
  }
}

export default Signup;
