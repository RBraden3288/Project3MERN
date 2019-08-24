import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, FormGroup, Label, CustomInput } from "reactstrap";
import "../index.css";
import UserNavBar from "../components/UserNavBar";
import OpenRequestsModal from "../components/OpenRequestsModal";
import OpenRequestDiv from "../components/OpenRequestsDiv";
import API from "../utils/API";

var bodyStyles = {
  fontFamily:
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  color: "#6b7a8f"
};
var headerStyles = {
  fontSize: "24px",
  color: "#FF3b3F",
  textAlign: "right"
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
    console.log(this.props);
  }

  loadUserRequests = () => {
    console.log(this.props.user.id);
    var userID = this.props.user.id;
    console.log(userID);
    API.getUserRequests(userID)
      .then(res => {
        console.log("dash res", res.data);
        this.setState({ requests: res.data });
      })
      .catch(err => console.log(err));
  };

  // Mount users and requests
  componentDidMount() {
    this.loadUserRequests();
  }
  render() {
    return (
      <div className="dashboard-container" style={bodyStyles}>
        <div className="layer">
          <UserNavBar />
          <Container fluid>
            <h1 className="display-3">Welcome, {this.props.user.firstName}</h1>
            <p className="lead dashboard-header2">
              Here you can view open requests and change your availability.
            </p>
          </Container>
          <Container>
            <Row>
              <Col className="dashboard-cards availability-card">
                <FormGroup>
                  <Label for="exampleCheckbox" style={headerStyles}>
                    Neighborly Availability
                  </Label>
                  <div>
                    <p className="dashboard-header2">
                      Let your neighbors know you're available for favors by
                      turning the switch below on.
                    </p>
                    <CustomInput
                      type="switch"
                      id="exampleCustomSwitch"
                      name="customSwitch"
                      label="Be a good neighbor"
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="dashboard-cards">
                <Label style={headerStyles}>Open Requests</Label>
                {/* map through requests */}
                {this.state.requests.length === 0 && (
                  <p>
                    There are no open requests.
                    <br />
                    Have a favor?
                    <Link to={"/requestform"}>Grab a neighbor.</Link>
                  </p>
                )}
                {this.state.requests.length > 0 &&
                  this.state.requests.map(request => (
                    <OpenRequestDiv request={request} />
                    // <OpenRequestsModal request={request} />
                  ))}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Dashboard;
