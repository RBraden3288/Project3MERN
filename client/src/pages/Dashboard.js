import React, { Component } from "react";
import { Link } from "react-router-dom";
// import the props from Signup '../pages/Signup';
import {
  Container,
  Col,
  Row,
  Jumbotron,
  FormGroup,
  Label,
  CustomInput,
  Badge
} from "reactstrap";
import "../index.css";
import UserNavBar from "../components/UserNavBar";
import OpenRequestsModal from "../components/OpenRequestsModal";
import API from "../utils/API";
import axios from "axios";
import auth from "../utils/auth";

var bodyStyles = {
  fontFamily:
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  color: "#A9A9A9"
}
var jumbotronStyles = {
  backgroundImage: 'url("https://i.ibb.co/5jbtrZN/IMG-7398.jpg")',
  backgroundSize: "cover",
  color: "#FFFFFF",
  textAlign: "right",
};
var headerStyles = {
  fontSize: "18px",
  color: "#FF3b3F"
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  // componentDidMount() {
  //   // axios.get("/").then(res => console.log(res.data));

  //   var token = auth.getJwt();

  //   if (!token) {
  //     console.log("User not logged in");
  //     window.location.href = "/";
  //   } else if (token) {
  //     // console.log("Here are my props:", this.props);
  //     auth.setAuthHeader(token);
  //     // console.log(token.exp);
  //     var currentUser = auth.getCurrentUser();
  //     console.log("the current user is", currentUser);

  //     this.setState({ user: this.currentUser });
  //     // console.log(this.state);
  //   } else if (currentUser.exp < Date.now() / 1000 || token === null) {
  //     auth.logOutUser();
  //   } else {
  //     console.log("User is not logged in");
  //   }

  //   // window.location.href = "/dashboard/:id";
  //   // this.props.history.push("/about");
  // }

  // componentDidMount(){
  //   // axios.get('/api/requests/' + passportuserID).then((result) => {
  //   //   this.setState(result);
  //   // })
  //   this.setState({ requests: [
  //       {
  //         ...response, array of req objects
  //       }
  //     ]
  //   })
  // }

  //LOAD USERS from utils/API
  // loadUser = () => {
  //   API.getUser()
  //   .then(res => this.setState({ users: res.data }))
  //   .catch(err => console.log(err));
  // }
  //LOAD REQUESTS from utils/API
  loadUserRequests = () => {
    API.getRequest()
      .then(res => this.setState({ requests: res.data }))
      .catch(err => console.log(err));
  }

  // Mount users and requests
  componentDidMount() {
    // this.loadUser();
    this.loadUserRequests();
  }
  render() {

    return (
      <div className="dashboard-container" style={bodyStyles}>
        <UserNavBar />
        <Jumbotron fluid style={jumbotronStyles}>
          <Container fluid>
            <h1 className="display-3">Welcome, {this.props.user.firstName}</h1>
            <p className="lead">
              Here you can view open requests and change your availability.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col
              xs="6"
              sm="4"
              style={{ backgroundColor: "#CAEBF2", borderRadius: "5px", height: "auto" }}
            >
              <FormGroup>
                <Label for="exampleCheckbox" style={headerStyles}>
                  Neighborly Availability
                </Label>
                <div>
                  <p>
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
            <Col xs="auto">
              <Label style={headerStyles}>Open Requests</Label>
              {/* map through requests */}
              {this.state.requests.length === 0 && (
                <p>There are no open requests.
                <br />Have a favor?
                  <Link to={"/requestform"}>
                    Grab a neighbor.
                    </Link></p>
              )}
              {this.state.requests.length > 0 &&
                this.state.requests.map(request => (
                  <OpenRequestsModal request={request} />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
