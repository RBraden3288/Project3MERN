import React from 'react';
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
    Label
} from 'reactstrap';
import "./style.css";

export default class Grid extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <Toast className="login_toast">
                            <ToastHeader>
                                Login
                            </ToastHeader>
                            <ToastBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                    </FormGroup>
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
                                <Form>
                                    <FormGroup check>
                                        <Col sm={{ size: 'auto', offset: 1 }}>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                I'm a client!
                                            </Label>
                                        </Col>
                                        <Col sm={{ size: 'auto', offset: 1 }}>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                I'm an attendant!
                                            </Label>
                                        </Col>
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