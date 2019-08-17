import React, { Component } from "react";
import NavigationBar from "../components/Navbar/";
import Grid from "../components/Login_SignUpGrid/";
import {
  Container,
  Col,
  Row,
  Label,
  Input,
  Button,
  FormText
} from "reactstrap";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // newUser: {
      // this will hold an array of objects identifying the user
      firstName: "",
      lastName: "",
      //   email: this.props.location.state.email,
      neighborhood: "",
      residence: "",
      entryway: "",
      password: "",
      bio: "",
      skills: "",
      photo_url: ""
      // }
    };
    console.log(this.state.firstName);

    //bind the methods to "this"
    this.handleChange = this.handleChange.bind(this);
  }
  //event handlers and functions to handle form submission
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Form submitted: `, this.state);
    // submit to backend to save might send you a token instead
    // this should come from App.js
    // this.props.logIn(<user obj from mongo>);
  };

  // componentWillMount () {
  //     const { emailInput } = this.props.location.state
  //     console.log(emailInput);
  // }

  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <form onSubmit={this.handleSubmit}>
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
                    type="text"
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
                    type="text"
                    name="verifypassword"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={{ offset: 7 }}>
                <Button type="submit" value="Submit" outline color="success">
                  Create my account!
                </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default Signup;
