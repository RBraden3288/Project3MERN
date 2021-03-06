import React, { Component } from "react";
import API from "./utils/API";
import axios from "axios";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import About from "../src/pages/About";
import Form from "../src/pages/RequestForm";
import Dashboard from "../src/pages/Dashboard";
import Results from "../src/pages/Results";

import PrivateRoute from "../src/components/PrivateRoute";
import NoMatch from "../src/pages/NoMatch";
import auth from "./utils/auth";

import jwtDecode from "jwt-decode";

// THIS IS NOW IN ITS OWN SEPARATE COMPONENT
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       auth.getToken() !== null ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/signup",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

class App extends Component {
  constructor(props) {
    super(props);
    // state to be used for app set here
    // user of course for user data
    // redirectToReferrer is a boolean
    // wh/ should be set to "True" when the user is known/logged in
    // if it's true, we can redirect the user to other places
    this.state = {
      user: null
      // redirectToReferrer: false
    };
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
      auth.setAuthHeader(token);
      // console.log(token.exp);
      var currentUser = auth.getCurrentUser();
      console.log(currentUser);

      if (currentUser.exp < Date.now() / 1000) {
        auth.logOutUser();
        window.location.href = "/";
        // more logic here for currentUser?
      } else {
        console.log("before");
        return this.setUser(currentUser);
        // this.login(currentUser).catch(err =>
        //   console.log("jasa caused this error", err)
        // );
      }
    } else {
      console.log("User is not logged in");
    }
  }

  login = ({ email, password }) => {
    // make axios login call
    return auth
      .logUserIn({
        email,
        password
      })
      .then(user => {
        this.setUser(user);
      });
    // store token
    // redirect to dashboard
  };

  setUser(user) {
    console.log(user)
    this.setState({ user }, () => {
      console.log("after");
      // window.location.href = `/dashboard/${user.id}`;
      this.props.history.push("/dashboard/" + user.id);
    });
  }

  // passing down mongoose id stored in the db with the user object
  createRequest = (request) => {
    const id = this.state.user.id;
    return API
      .createRequest(id, request)
      .then(res => {
        console.log(res);
        this.props.history.push("/dashboard/" + id)
      })
  }

  render() {
    console.log("is logged in", this.state.user);
    return (
      <div>
        <div className="App">
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}

          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/requestform" exact render={(props) => <Form {...props} createRequest={this.createRequest} />} />
            {/* testing environments for dashboard and results routes */}
            {/* pass a default id parameter in the URL to view testing environment */}
            <PrivateRoute
              path="/dashboard/:id"
              exact
              render={props => <Dashboard {...props} user={this.state.user} />}
            />
            <PrivateRoute path="/results/:id" exact component={Results} />
            <Route
              path="/"
              render={props => <Login {...props} login={this.login} />}
            />
            {/* catch all page - when they try to navigate to a nonexistent page via a nonexistent route */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>

      // <Router>
      //   {/* element from react-router-dom that requires two parameters
      //   path with the URL extension AND with the exact attribute of the component */}
      //   {/* <Route path="/" exact component={Login} /> */}
      //   <Route path="/" exact render={(props) => <Login {...props} user={this.state.user} />} />
      //   <Route path="/about" exact component={About} />
      //   <Route path="/signup" exact component={Signup} />
      //   <Route path="/requestform" exact component={Form} />
      //   {/* testing environments for dashboard and results routes */}
      //   {/* pass a default id parameter in the URL to view testing environment */}
      //   <Route path="/dashboard" exact render={(props) => <Dashboard {...props} user={this.state.user} />} />
      //   {/* <Route path="/dashboard/:id" exact component={Dashboard} /> */}
      //   <Route path="/results/:id" exact component={Results} />
      // </Router>
    );
  }
}
export default withRouter(App);
