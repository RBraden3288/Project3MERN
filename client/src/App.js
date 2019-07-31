import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../src/pages/Login"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}
          <Route path="/" exact component={Login} />
        </Router>
      </div>
    )

  }
  
}
export default App;
