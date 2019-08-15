import React, { Component } from 'react';
import API from './utils/API';

import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import About from "../src/pages/About";
import Form from "../src/pages/RequestForm";
import Dashboard from "../src/pages/Dashboard";
import Results from "../src/pages/Results";

class App extends Component {

  //testing
  state = {
    user: {
      firstName: "John",
      lastName: "Doe",
      email: "John.Doe@gmail.com",
      neighborhood: "Sunset",
      residence: "Entire home",
      entryway: "Key/Lockbox",
      password: "hiya88!",
      bio: "I'm John",
      skills: "I can drive a car and a motorcycle",
      photo_url: "https://www.google.com/search?q=photo+url&oq=photo+url&aqs=chrome..69i57j0l5.1992j0j7&sourceid=chrome&ie=UTF-8"
    }
  }
  
  async componentDidMount() {
    
    // let userLogin = await API.get('/login??', {
    //   params: {
    //     email: ??,
    //     password: ??,
    //   }
    // })
  
  }

  render() {
    return (
      <div className='index'>
        <Router>
          {/* element from react-router-dom that requires two parameters
          path with the URL extension AND with the exact attribute of the component */}
          {/* <Route path="/" exact component={Login} /> */}
          <Route path="/" exact render={(props) => <Login {...props} user={this.state.user} />} />
          <Route path="/about" exact component={About} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/requestform" exact component={Form} />
          {/* testing environments for dashboard and results routes */}
          {/* pass a default id parameter in the URL to view testing environment */}
          <Route path="/dashboard" exact render={(props) => <Dashboard {...props} user={this.state.user} />} />
          {/* <Route path="/dashboard/:id" exact component={Dashboard} /> */}
          <Route path="/results/:id" exact component={Results} />
        </Router>
      </div>
    )

  }
  
}
export default App;
