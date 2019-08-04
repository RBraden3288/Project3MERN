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
    Media,
    Button
} from 'reactstrap';
import UserNavBar from '../components/UserNavBar';

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
      </Container>
      
    </div>
  );
};

export default Dashboard;