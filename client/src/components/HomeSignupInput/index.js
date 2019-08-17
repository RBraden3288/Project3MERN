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

class SignUpField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {}
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    console.log(`current state: `, this.state);
  };

  render() {
    return (
      <div>
        <Toast className="signup_toast">
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
                  > */}
                      Submit
                      {/* </Link> */}
                      {/* onSubmit={props.handleSubmit} */}
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default SignUpField;
