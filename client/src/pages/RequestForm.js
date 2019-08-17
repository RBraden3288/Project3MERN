import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import RequestFormInput from '../components/RequestFormInput'

class Form extends React.Component {

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
