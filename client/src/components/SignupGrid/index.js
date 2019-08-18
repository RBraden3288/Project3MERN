import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Toast,
  ToastBody,
  ToastHeader,
  Container,
  Row,
  Col,
  Form,
  FormText,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import "./style.css";
// import { userInfo } from "os";
import API from "../../utils/API";
import axios from "axios";

class SignUpGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      // newUser: {
      // this will hold an array of objects identifying the user
      firstName: "",
      lastName: "",
      //   email: this.props.location.state.email,
      neighborhood: "",
      residence: "",
      entryway: "",
      password: "",
      verifypassword: "",
      bio: "",
      skills: "",
      photo_url: "",
      errors: {}
    };
    console.log(this.state.firstName);
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  signup = userInfo => {
    // return API.registerUser(userInfo).then(user => {
    return axios.post("/api/auth/register", userInfo).then(user => {
      console.log("User successfully registered", user);
      window.location.href = "/";
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    console.log("we got here");

    const newUserSignup = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      neighborhood: this.state.neighborhood,
      residence: this.state.residence,
      entryway: this.state.entryway,
      password: this.state.password,
      passwordTwo: this.state.verifypassword,
      bio: this.state.bio,
      skills: this.state.skills,
      photo_url: this.state.photo_url
    };
    console.log(newUserSignup);

    this.signup(newUserSignup).catch(err => {
      console.log("jasa's app didn't sign me up:", err);

      const errors = err;
      this.setState({ errors: errors });
    });

    // submit to backend to save might send you a token instead
    // this should come from App.js
    // this.props.logIn(<user obj from mongo>);

    // componentWillMount () {
    //     const { emailInput } = this.props.location.state
    //     console.log(emailInput);
    // }

    // submit to backend to save might send you a token instead
    // this should come from App.js
    // this.props.logIn(<user obj from mongo>);

    //send an http post request to the backend
    //a new object that contains the values coming from the form

    //path using server.js localhost path?
    //url??:URL PATH END POINT THAT CONTAINS INCOMING POST REQUEST  /dashboard/ + newUserSignup??
    // axios.post('http://localhost:3001/dashboard', newUserSignup)
    //     .then(res => console.log(res.data));
  };

  render() {
    return (
      <div>
        <Container>
          {/* <form onSubmit={this.handleSignUp}> */}
          <Form>
            <Row>
              <Col xs="6">
                <Label>
                  First Name
                  <Input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
              <Col xs="6">
                <Label>
                  Last Name
                  <Input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
            </Row>

            <Row>
              <Col xs="6">
                <Label>
                  Email
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
              <Col xs="6">
                <Label>
                  Choose Your Neighborhood
                  <Input
                    value={this.state.neighborhood}
                    onChange={this.handleChange}
                    type="select"
                    name="neighborhood"
                  >
                    <option>Fisherman&apos;s Wharf</option>
                    <option>North Beach</option>
                    <option>Chinatown</option>
                    <option>Embarcadero &#47; Financial District</option>
                    <option>SOMA &#47; Yerba Buena</option>
                    <option>Union Square</option>
                    <option>Central Market</option>
                    <option>Castro &#47; Noe Valley</option>
                    <option>Civic Center &#47; Hayes Valley</option>
                    <option>Haight&#45;Ashbury</option>
                    <option>Fillmore</option>
                    <option>Japantown</option>
                    <option>Nob Hill</option>
                    <option>Marina &#47; Pacific Heights</option>
                    <option>Presidio &#47; Richmond</option>
                    <option>Sunset</option>
                    <option>Bayview</option>
                    <option>Treasure Island</option>
                    <option>Mission District</option>
                  </Input>
                </Label>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <Label>
                  Residence Type
                  <Input
                    value={this.state.residence}
                    onChange={this.handleChange}
                    type="select"
                    name="residence"
                  >
                    <option>Entire home</option>
                    <option>Flat</option>
                    <option>Apartment&#47;Condo</option>
                  </Input>
                </Label>
              </Col>
              <Col xs="6">
                <Label>
                  Entry Type
                  <Input
                    value={this.state.entryway}
                    onChange={this.handleChange}
                    type="select"
                    name="entryway"
                  >
                    <option>Key&#47;Lockbox</option>
                    <option>Doorman&#47;Property Manager</option>
                    <option>Keyless&#47;Remote&#47;App</option>
                  </Input>
                </Label>
                <FormText color="muted">
                  Examples of keyless entry ways include: Nest, Fingerprint,
                  August, etc.
                </FormText>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="6">
                <Label>
                  About me
                  <Input
                    type="textarea"
                    name="bio"
                    placeholder="Tells us about yourself."
                    value={this.state.bio}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
              <Col xs="6">
                <Label>
                  Skills and Credentials
                  <Input
                    type="textarea"
                    name="skills"
                    placeholder="e.g. Driver license, green thumb, pet allergies"
                    value={this.state.skills}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>
                  Photo URL
                  <FormText color="muted">
                    Link and share a URL of your image from an image hosting and
                    sharing service.
                  </FormText>
                  <Input
                    type="url"
                    name="photo_url"
                    value={this.state.photo_url}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
            </Row>

            <Row>
              <Col xs="6">
                <Label>
                  Password
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
              <Col xs="6">
                <Label>
                  Verify password
                  <Input
                    type="password"
                    name="verifypassword"
                    value={this.state.verifypassword}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={{ offset: 7 }}>
                {this.state.errors && (
                  <div>
                    <h1>{this.state.errors.email}</h1>
                    <br />
                    <h1>{this.state.errors.password}</h1>
                  </div>
                )}
                {/* {this.state.errors && (<div> <h1>{this.state.errors.email}</h1> <br> <h1> {this.state.errors.password} </h1>)} */}
                <Button outline color="success" onClick={this.handleSignUp}>
                  Create my account!
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignUpGrid;

{
  /* <Toast className="signup_toast">
          <ToastHeader>Create your account!</ToastHeader>
          <ToastBody>
            <Form>
              <FormGroup check>
                <Row>
                  <Col>
                    <Label>
                      Email
                      <Input
                        type="text"
                        name="email"
                        id="exampleEmail"
                        placeholder="johnsmith@email.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Label>
                  </Col>
                  {this.state.errors.email && (
                    // <h1>{this.state.errors.email}</h1>
                    <h1>{this.state.errors}</h1>
                  )}
                </Row>
                <Row>
                  <Col>
                    <Button outline color="success">
                      {/* <Link
                    to={{
                      pathname: "/signup",
                      state: {
                        emailInput: props.email
                      }
                    }}
                  > */
}
//               Submit
//               {/* </Link> */}
//               {/* onSubmit={props.handleSubmit} */}
//             </Button>
//           </Col>
//         </Row>
//       </FormGroup>
//     </Form>
//   </ToastBody>
// </Toast>
