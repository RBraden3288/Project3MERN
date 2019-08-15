import React from 'react';
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
} from 'reactstrap';
import './style.css';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": ""
        }

        //bind the methods to "this"
        this.handleChange = this.handleChange.bind(this);
    }
    //event handlers and functions to handle form submission
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`Email signup: `, this.state);
    }

    render() {
        return (
            <Container className="toast-container">
                <Row>
                    <Col xs="6">
                        <Toast className="login_toast">
                            <ToastHeader>
                                Login
                            </ToastHeader>
                            <ToastBody className='toast-body'>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </FormGroup>
                                    <button className='button'>
                                        <Link to={"/dashboard/"
                                            // + [USERID]
                                        }>Submit</Link>
                                    </button>
                                </Form>
                            </ToastBody>
                        </Toast>
                    </Col>

                    <Col xs="6">
                        <Toast className="signup_toast">
                            <ToastHeader>
                                Create your account!
                            </ToastHeader>
                            <ToastBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup check>
                                        <Row>
                                            <Col >
                                                <Label>Email
                                                <Input
                                                        type="email"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
                                                    />
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <button className='button'>
                                                    <Link to={{
                                                        pathname: "/signup",
                                                        state: {
                                                            emailInput: this.state.email
                                                        }
                                                    }}>Submit</Link>
                                                </button>
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