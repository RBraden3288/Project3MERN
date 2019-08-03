import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import About from "../src/pages/About";
import Form from "../src/pages/RequestForm";
import Dashboard from "../src/pages/Dashboard";
import Results from "../src/pages/Results";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}
          <Route path="/" exact component={Login} />
          <Route path="/about" exact component={About} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/requestform" exact component={Form} />
          {/* testing environments for dashboard and results routes */}
          {/* pass a default id parameter in the URL to view testing environment */}
          <Route path="/dashboard/:id" exact component={Dashboard} />
          <Route path="/results/:id" exact component={Results} />
        </Router>
      </div>
    )

  }
  
}
export default App;
