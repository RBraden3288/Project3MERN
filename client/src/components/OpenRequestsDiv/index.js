import React from 'react';
import {
    Col,
    Row,
    Container
} from 'reactstrap';
import './openRequestsDiv-style.css';


export default class OpenRequestsDiv extends React.Component {
    render() {
        return (
            <div className="requests-container">
                <Container className="request-header">
                    <Row className="title">
                        <Col>
                            request title
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <button className="req-btn">
                                update request
                            </button>
                        </Col>
                        <Col>
                            <button className="req-btn">
                                delete request
                            </button>
                        </Col>
                        <Col>
                            <button className="req-btn">
                                view neighbors
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container className="request-body">
                request date and tasks here
                </Container>
            </div>
        )
    }
}