import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import API from '../utils/API';
import UserNavBar from "../components/UserNavBar";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  FormText
} from 'reactstrap';
import "../index.css";

var containerStyles = {
  margin: "100px",
  backgroundColor: '#CAEBF2',
  color: "#A9A9A9",
  fontFamily:
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
};

var headerStyles = {
  fontFamily:
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  color: "#FF383F",
  fontSize: '24px',
  float: 'right',
  letterSpacing: '3px',
  margin: '10px'
};
var formContainer ={
  backgroundColor: '#CAEBF2',
  margin: '10px'
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestTitle: "",
      startDate: "",
      endDate: "",
      dust: false,
      vaccuum: false,
      temp: false,
      timers: false,
      mail: false,
      packages: false,
      yardwork: false,
      trash: false,
      moveCar: false,
      moveMC: false,
      moveMP: false,
      moveOS: false,
      playCat: false,
      feedCat: false,
      litter: false,
      feedCritter: false,
      cleanCritTank: false,
      feedFish: false,
      cleanFishTank: false,
      //test in console to view if data loaded
      loading: false
    };

    //bind methods to this
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handle change for dates
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handle event changes for checked items
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Request form submitted: `, this.state);

    //handle a post request for adding form to db
     
    // axios.post("/api/requests", this.state).then(res => console.log(res.data));
    // API.createRequest()
    //   .then(res => this.setState(res.data))
    this.props.createRequest(this.state).catch((err) => {
      console.error(err);
    });
  };

  render() {
    return (
      <div styles={containerStyles}>
        <UserNavBar />
        <br />
        <Container >
          <Row>
            <div style={headerStyles}>
              SUBMIT A REQUEST
          </div>
          </Row>
          <br />

          <div styles={formContainer}>

            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs="6" sm="4">
                  <Label>Create a request request
                    <Input
                      type="text"
                      name="requestTitle"
                      placeholder="Request Title"
                      value={this.state.requestTitle}
                      onChange={this.handleChange}
                    ></Input>
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col xs="6" sm="4">
                  <FormGroup>
                    <Label>Start Date
          <Input
                        type="date"
                        name="startDate"
                        id="startDate"
                        placeholder="date placeholder"
                        value={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="6" sm="4">
                  <FormGroup>
                    <Label>End Date
          <Input
                        type="date"
                        name="endDate"
                        id="endDate"
                        placeholder="date placeholder"
                        value={this.state.endDate}
                        onChange={this.handleChange}
                      />
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="6">

                </Col>
              </Row>
              <Row>Indoor tasks</Row>
              <Row>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="dust"
                        type="checkbox"
                        id="dust"
                        checked={this.state.dust}
                        onChange={this.handleInputChange} />
                      Dust
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="vaccuum"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.vaccuum}
                        onChange={this.handleInputChange} />
                      Vaccuum
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="temp"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.temp}
                        onChange={this.handleInputChange} />
                      Adjust thermostat
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="timers"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.timers}
                        onChange={this.handleInputChange} />
                      Check timers
              </Label>
                  </FormGroup>
                </Col>
              </Row>

              <br />


              <Row>Outdoor tasks</Row>
              <Row>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="mail"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.mail}
                        onChange={this.handleInputChange} />
                      Check the mail &#47; Bring in newspapers
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="packages"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.packages}
                        onChange={this.handleInputChange} />
                      Sign for packages
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="yardwork"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.yardwork}
                        onChange={this.handleInputChange} />
                      Yardwork
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="trash"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.trash}
                        onChange={this.handleInputChange} />
                      Take out trash, compost, recycling
              </Label>
                  </FormGroup>
                </Col>
              </Row>

              <br />


              <Row><FormText color="muted">Avoid street-cleaning &#47; 72&#130;hour time enforcement tickets.
          <br />Appropriate license required!</FormText></Row>
              <Row>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="moveCar"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.moveCar}
                        onChange={this.handleInputChange} />
                      Move car
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="moveMC"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.moveMC}
                        onChange={this.handleInputChange} />
                      Move motorcycle
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="moveMP"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.moveMP}
                        onChange={this.handleInputChange} />
                      Move mo-ped
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="moveOS"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.moveOS}
                        onChange={this.handleInputChange} />
                      Move large vehicle
                <Row><FormText color="muted">such as RV or camper</FormText></Row>
                    </Label>
                  </FormGroup>
                </Col>
              </Row>



              <Row>Pet chores </Row>
              <Row><FormText color="muted">Because our canine companions require a little more attention and care, Neighbor Favor
          cannot be responsible for the care of dogs and reccomends seeking other services for your furry friend.</FormText></Row>
              <Row>
                <Col xs="6" sm="4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="playCat"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.playCat}
                        onChange={this.handleInputChange} />
                      Play with cat
              </Label>
                  </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="feedCat"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.feedCat}
                        onChange={this.handleInputChange} />
                      Feed cat and change water bowl
              </Label>
                  </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="litter"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.litter}
                        onChange={this.handleInputChange} />
                      Change litter box
              </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="feedCritter"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.feedCritter}
                        onChange={this.handleInputChange} />
                      Feed reptiles/rodents
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="cleanCritTank"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.cleanCritTank}
                        onChange={this.handleInputChange} />
                      Clean tank
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="feedFish"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.feedFish}
                        onChange={this.handleInputChange} />
                      Feed Fish
              </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        name="cleanFishTank"
                        type="checkbox"
                        id="checkbox2"
                        checked={this.state.cleanFishTank}
                        onChange={this.handleInputChange} />
                      Clean fish tank
              </Label>
                  </FormGroup>
                </Col>
              </Row>

              <br />


              <Button>Submit request!</Button>

            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Form;

// This is the form the resident will use to fill out their needs
// all the other components you want to import will go into here
// Example: import { Input, TextArea, Form Btn } from "..components/Form"
// In which case, we'd have to create those components in the component folder

// TO-DO: Figure out what class we'd want to put
// class __ extends __ {

// We will probably use states here

// }

// render() {
// return (
// render reactstrap elements here for the interest form page
// )
// }

// ---------- EXPORTING ----------
// export default Form;
