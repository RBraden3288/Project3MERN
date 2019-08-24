import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormText,
  Input,
  Label,
  Button
} from "reactstrap";
import "./style.css";
import API from "../../utils/API";

class SignUpGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",

      firstName: "",
      lastName: "",
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
    return API.registerUser(userInfo).then(user => {
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
  };

  render() {
    return (
      <div>
        <Container>
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
