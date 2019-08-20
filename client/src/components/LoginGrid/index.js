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
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import "./style.css";
// import LoginFields from "../HomeRegisteredEmailInput";

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

class LoginGrid extends React.Component {
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

  componentDidMount() {
    // check to see if there is a token (i.e. if the user has already logged in)
    // if so, set the current user to be this user using their token
    // (i.e. run the current user function --
    // which will decode the user's token from localStorage or return null
    // --> if this returns a truthy value (meaning there's a current user)
    // --> authorize the user's requests using their token
    var token = auth.getJwt();

    if (token) {
      console.log("Here are my props:", this.props);
      auth.setAuthHeader(token);
      // console.log(token.exp);
      var currentUser = auth.getCurrentUser();
      console.log(currentUser);

      // this.setState(currentUser);
      window.location.href = "/dashboard/:id";
      // this.props.history.push("/about");
    } else if (currentUser && currentUser.exp < Date.now() / 1000) {
      auth.logOutUser();
      window.location.href = "/";
    } else {
      console.log("User is not logged in");
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // <<<<<<< HEAD
  login = userInfo => {
    return auth.logUserIn(userInfo).then(user => {
      // set user state
      this.setState({ user });
      console.log("User is logged in");
      window.location.href = "dashboard/:id";
      // this.props.history.push("/dashboard" + user._id);
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
      <Container className="toast-container">
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
              <ToastBody className="toast-body">
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
                  <Button outline color="success" onClick={this.handleLogIn}>
                    {/* <Link to={"/dashboard/"
                                            // + [USERID]
                                        }>Submit</Link> */}
                    Submit
                  </Button>
                  {/* <button className='button'>
//                                         <Link to={"/dashboard/"
//                                             // + [USERID]
//                                         }>Submit</Link>
//                                     </button></button> */}
                  <Button>
                      <Link to={"/signup"}>
                    Create an account
                      </Link>
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

export default LoginGrid;
// ===
//                     <Col xs="6">
//                         <Toast className="signup_toast">
//                             <ToastHeader>
//                                 Create your account!
//                             </ToastHeader>
//                             <ToastBody>
//                                 <Form onSubmit={this.handleSubmit}>
//                                     <FormGroup check>
//                                         <Row>
//                                             <Col >
//                                                 <Label>Email
//                                                 <Input
//                                                         type="email"
//                                                         name="email"
//                                                         value={this.state.email}
//                                                         onChange={this.handleChange}
//                                                     />
//                                                 </Label>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col>
//                                                 <button className='button'>
//                                                     <Link to={{
//                                                         pathname: "/signup",
//                                                         state: {
//                                                             emailInput: this.state.email
//                                                         }
//                                                     }}>Submit</Link>
//                                                 </button>
//                                             </Col>
//                                         </Row>
//                                     </FormGroup>
//                                 </Form>
//                             </ToastBody>
//                         </Toast>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }
