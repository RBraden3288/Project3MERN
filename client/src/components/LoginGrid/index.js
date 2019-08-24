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

class LoginGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogIn = event => {
    event.preventDefault();
    console.log(`Email signup: `, this.state);
    console.log("this.props", this.props);
    this.props.login(this.state).catch(err => {
      console.log(" app doesnt log me in", err);
      const errors = err;
      this.setState({ errors: errors });
    });
  };

  render() {
    return (
      <Container className="toast-container">
        <Row>
          <Col xs="6">
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
                    {this.state.errors.email && <h1>{this.state.errors}</h1>}
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
                    Submit
                  </Button>
                  <Button>
                    <Link to={"/signup"}>Create an account</Link>
                  </Button>
                </Form>
              </ToastBody>
            </Toast>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginGrid;
