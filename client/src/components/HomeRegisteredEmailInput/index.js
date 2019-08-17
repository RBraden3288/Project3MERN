// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import {
//   Toast,
//   ToastBody,
//   ToastHeader,
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Button
// } from "reactstrap";
// import "./style.css";

// // const LoginFields = props => {
// class LoginFields extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };

//     //bind the methods to "this"
//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleSignIn = this.handleSignIn.bind(this);
//   }

//   //event handlers and functions to handle form submission
// //   handleChange = event => {
// //     const { name, value } = event.target;
// //     this.setState({
// //       [name]: value
// //     });
// //   };

// //   handleLogIn = event => {
// //     event.preventDefault();
// //     console.log(`Email signup: `, this.state);
// //     this.props.login(this.state).catch(err => {
// //       // console.log("jasa's app doesnt log me in", err.response);
// //       console.log("jasa's app doesnt log me in", err);
// //       // const errors = err.response.data;
// //       const errors = err;
// //       this.setState({ errors: errors });
// //     });
// //   };

//   render() {
//     // if (props.authenticatedRedirect === true) {
//     //   return <Redirect to="/dashboard/:id" />;
//     // }
//     return (
//       <div>
//         <Toast className="login_toast">
//           <ToastHeader>Login</ToastHeader>
//           <ToastBody>
//             <Form>
//               <FormGroup>
//                 <Label for="exampleEmail">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   id="exampleEmail"
//                   placeholder="johnsmith@email.com"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//                 {this.state.errors.email && (
//                   // <h1>{this.state.errors.email}</h1>
//                   <h1>{this.state.errors}</h1>
//                 )}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   id="examplePassword"
//                   placeholder="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <Button outline color="success" onClick={this.props.handleLogIn}>
//                 {/* <Link to={"/dashboard/"
//                                             // + [USERID]
//                                         }>Submit</Link> */}
//                 Submit
//               </Button>
//             </Form>
//           </ToastBody>
//         </Toast>
//       </div>
//     );
//   }
// }

// export default LoginFields;
