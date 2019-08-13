import React from "react";
import { Link } from "react-router-dom";
import {
  Toast,
  ToastBody,
  ToastHeader,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import "./style.css";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    //bind the methods to "this"
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSignIn = this.handleSignIn.bind(this);
  }
  //event handlers and functions to handle form submission
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogIn = event => {
    event.preventDefault();
    console.log(`Email signup: `, this.state);
    this.props.login(this.state).catch(err => {
      // console.log("jasa's app doesnt log me in", err.response);
      console.log("jasa's app doesnt log me in", err);
      // const errors = err.response.data;
      const errors = err;
      this.setState({ errors: errors });
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    console.log(`current state: `, this.state);
  };

  render() {
    console.log("e", this.state.errors);
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Toast className="login_toast">
              <ToastHeader>Login</ToastHeader>
              <ToastBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    {this.state.errors.email && (
                      // <h1>{this.state.errors.email}</h1>
                      <h1>{this.state.errors}</h1>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button outline color="success" onClick={this.handleLogIn}>
                    {/* <Link to={"/dashboard/"
                                            // + [USERID]
                                        }>Submit</Link> */}
                    Submit
                  </Button>
                </Form>
              </ToastBody>
            </Toast>
          </Col>

          <Col xs="6">
            <Toast className="signup_toast">
              <ToastHeader>Create your account!</ToastHeader>
              <ToastBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup check>
                    <Row>
                      <Col>
                        <Label>
                          Email
                          <Input
                            type="email"
                            name="sign-up-email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button outline color="success">
                          <Link
                            to={{
                              pathname: "/signup",
                              state: {
                                emailInput: this.state.email
                              }
                            }}
                          >
                            Submit
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </ToastBody>
            </Toast>
          </Col>
        </Row>
      </Container>
    );
  }
}
