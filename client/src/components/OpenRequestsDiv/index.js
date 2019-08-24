import React from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "reactstrap";
import "./openRequestsDiv-style.css";

export default class OpenRequestsDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentDidMount = () => {
    this.getAllRequests();
  };

  getAllRequests = () => {
    API.getUserRequests()
      .then(res => {
        console.log("open requests", res.data);
        this.setState({ requests: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="requests-container">
        {/* {console.log("Request tile props", {this.props})} */}
        <Container className="request-header">
          <Row className="title">
            <Col>{this.props.title}</Col>
          </Row>
          <Row>{this.props.startDate}</Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <button className="req-btn">update request</button>
            </Col>
            <Col>
              <button className="req-btn">delete request</button>
            </Col>
            <Col>
              <button className="req-btn">view neighbors</button>
            </Col>
          </Row>
        </Container>
        <Container className="request-body">
          request date and tasks here
        </Container>
      </div>
    );
  }
}
