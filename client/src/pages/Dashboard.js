import React from 'react';
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

const Dashboard = (props) => {
  return (
    <div>
      <UserNavBar />
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome, [insert firstName prop here]</h1>
          <p className="lead">Here you can view open requests and change your availability.</p>
        </Container>
      </Jumbotron>
      <Container>
          <Row>
              <Col>
      <FormGroup>
          <Label for="exampleCheckbox">Neighborly Availability</Label>
          <div>
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Be a good neighbor" />
        </div>
        </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col>
            <Label>Open Requests</Label>
            <OpenRequestsModal />
            </Col>
          </Row>
      </Container>
      
    </div>
  );
};

export default Dashboard;