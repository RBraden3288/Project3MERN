import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import About from "../src/pages/About";
import Form from "../src/pages/RequestForm";
import Dashboard from "../src/pages/Dashboard";
import Results from "../src/pages/Results";
import auth from "./utils/auth";
import axios from "axios";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.getToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signup",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // check to see if there is a token
    // if so login with token
  }

  login = userInfo => {
    auth.logUserIn(userInfo).then(user => {
      // set user state
      this.setState({ user });
    });
  };

  render() {
    return (
      <div>
        <Router>
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}
          <Route
            path="/"
            exact
            render={props => <Login {...props} login={this.login} />}
          />
          <Route path="/about" exact component={About} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/requestform" exact component={Form} />
          {/* testing environments for dashboard and results routes */}
          {/* pass a default id parameter in the URL to view testing environment */}
          <PrivateRoute path="/dashboard/:id" exact component={Dashboard} />
          <PrivateRoute path="/results/:id" exact component={Results} />
        </Router>
      </div>
    );
  }
}
export default App;
