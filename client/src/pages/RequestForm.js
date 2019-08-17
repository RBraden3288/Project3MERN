import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import RequestFormInput from '../components/RequestFormInput'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestTitle: "",
      startDate: "",
      endDate: "",
      dust: false,
      vaccuum: false,
      temp: false,
      timers: false,
      mail: false,
      packages: false,
      yardwork: false,
      trash: false,
      moveCar: false,
      moveMC: false,
      moveMP: false,
      moveOS: false,
      playCat: false,
      feedCat: false,
      litter: false,
      feedCritter: false,
      cleanCritTank: false,
      feedFish: false,
      cleanFishTank: false,
      //test in console to view if data loaded
      loading: false
    };

    //bind methods to this
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };


  // handle change for dates
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  };

  //handle event changes for checked items
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    console.log(`Request form submitted: `, this.state);

    //handle a post request for adding form to db
    axios.
      post("/api/requests", this.state)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div>
        <UserNavBar />
        <RequestFormInput />
      </div>

    )
  }
}

export default Form;

// This is the form the resident will use to fill out their needs
// all the other components you want to import will go into here
// Example: import { Input, TextArea, Form Btn } from "..components/Form"
// In which case, we'd have to create those components in the component folder

// TO-DO: Figure out what class we'd want to put
// class __ extends __ {

// We will probably use states here

// }

// render() {
// return (
// render reactstrap elements here for the interest form page
// )
// }

// ---------- EXPORTING ----------
// export default Form;
