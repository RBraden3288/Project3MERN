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
// import LoginFields from "../HomeRegisteredEmailInput";
import SignUpField from "../HomeSignupInput";
import auth from "../../utils/auth";

// export default class Grid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
// }

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  //bind the methods to "this"
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handleSignIn = this.handleSignIn.bind(this);
  // }
  //event handlers and functions to handle form submission
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  login = userInfo => {
    return auth.logUserIn(userInfo).then(user => {
      // set user state
      this.setState({ user });
      // this.setState({ user, redirectToReferrer: true });
    });
  };

  handleLogIn = event => {
    event.preventDefault();
    console.log(`Email signup: `, this.state);
    console.log("this.props", this.props);
    this.login(this.state).catch(err => {
      // console.log("jasa's app doesnt log me in", err.response);
      console.log("jasa's app doesnt log me in", err);
      // const errors = err.response.data;
      const errors = err;
      this.setState({ errors: errors });
    });
  };

  // handleSignUp = event => {
  //   event.preventDefault();
  //   console.log(`current state: `, this.state);
  // };

  render() {
    // if
    // console.log("e", this.state.errors);
    return (
      <Container>
        <Row>
          <Col xs="6">
            {/* <LoginFields
            //   loginEmail={this.state.email}
            //   password={this.state.password}
            //   errors={this.state.errors}
            //   handleChange={this.handleChange}
            //   handleLogIn={this.handleLogin}
            // {...props}
            // login={props.login}
            // authenticatedRedirect={props.authenticatedRedirect}
            /> */}

            {/* <div> */}
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
                      placeholder="johnsmith@email.com"
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
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    outline
                    color="success"
                    onClick={this.props.handleLogIn}
                  >
                    {/* <Link to={"/dashboard/"
                                            // + [USERID]
                                        }>Submit</Link> */}
                    Submit
                  </Button>
                </Form>
              </ToastBody>
            </Toast>
            {/* </div> */}
          </Col>

          {/* <Col xs="6">
            <SignUpField
            // signUpEmail={this.state.email}
            // handleChange={this.handleChange}
            />
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Login;
