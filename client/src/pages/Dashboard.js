import React, { Component} from 'react'; 
import axios from 'axios';
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
} from 'reactstrap';
import UserNavBar from '../components/UserNavBar';
import OpenRequestsModal from '../components/OpenRequestsModal';
import API from '../utils/API';
import axios from 'axios';

var styles = {
  "backgroundImage": 'url("https://i.ibb.co/5jbtrZN/IMG-7398.jpg")',
  "backgroundSize": 'cover',
  "color": "#FFFFFF",
  "textAlign": "right",
  "fontFamily": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
}

class Dashboard extends Component {
  state = {
    requests: []
  }
  
  componentDidMount() {
    axios.get('/')
        .then(res => console.log(res.data));
}
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
  render() {
  var headerStyles = {
    "fontFamily": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "fontSize": "18px"
  };

  // //LOAD USERS from utils/API
  // loadUser = () => {
  //   API.getUser()
  //   .then(res => this.setState({ users: res.data }))
  //   .catch(err => console.log(err));
  // }
  // //LOAD REQUESTS from utils/API
  // loadUserRequests = () => {
  //   API.getRequest()
  //   .then(res => this.setState({ requests: res.data }))
  //   .catch(err => console.log(err));
  // }

  //Mount users and requests
  // componentDidMount() {
  //   this.loadUser();
  //   this.loadUserRequests();
  // }

  return (
    <div>
      <UserNavBar />
      <Jumbotron fluid style={styles}>
        <Container fluid>
          <h1 className="display-3">Welcome, {this.props.user.firstName}</h1>
          <p className="lead">Here you can view open requests and change your availability.</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs='6' sm='4' style={{ "backgroundColor": "#DCC7AA", "borderRadius": "5px" }}>
            <FormGroup>
              <Label for="exampleCheckbox" style={headerStyles}>Neighborly Availability</Label>
              <div>
                <p>Let your neighbors know you're available for favors by turning the switch below on.</p>
                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Be a good neighbor" />
              </div>
            </FormGroup>
          </Col>
          <Col xs='auto'>
            <Label style={headerStyles}>Open Requests</Label>
            {/* map through requests */}
                  {this.state.requests.length === 0 && <p>There are no open requests.</p>}
                  {this.state.requests.length > 0 && this.state.requests.map(request => <OpenRequestsModal request={request} />)}
          </Col>
        </Row>
      </Container>

    </div>
  );
  }
};

export default Dashboard;