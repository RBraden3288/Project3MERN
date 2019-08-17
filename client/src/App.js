import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
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
import axios from "axios";
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
      }
      this.setState(currentUser);
    } else {
      console.log("User is not logged in");
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}

          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/requestform" exact component={Form} />
            {/* testing environments for dashboard and results routes */}
            {/* pass a default id parameter in the URL to view testing environment */}
            <PrivateRoute path="/dashboard/:id" exact component={Dashboard} />
            <PrivateRoute path="/results/:id" exact component={Results} />
            <Route path="/" exact render={props => <Login />} />
            {/* catch all page - when they try to navigate to a nonexistent page via a nonexistent route */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
