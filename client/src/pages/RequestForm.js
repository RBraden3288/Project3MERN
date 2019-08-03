import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

const Form = props => {
  return (
    <div>
      <UserNavBar />
      <br />
      <Container>
        <Row>
          Submit A Request
          </Row>
        <br />

        <Container>
          <Row>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label>Date
          <Input
                    type="date"
                    name="startDate"
                    id="startDate"
                    placeholder="date placeholder"
                  />
                </Label>
              </FormGroup>
            </Col>
            <Col xs='3'>to</Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label>Date
          <Input
                    type="date"
                    name="endDate"
                    id="endDate"
                    placeholder="date placeholder"
                  />
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>Indoor tasks</Row>
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Dust
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Vaccuum
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Adjust thermostat
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Check timers
              </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <br />

        <Container>
          <Row>Outdoor tasks</Row>
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Check the mail &#47; Bring in newspapers
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Sign for packages
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Yardwork
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Take out trash, compost, recycling
              </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <br />

        <Container>
          <Row><FormText color="muted">Avoid street-cleaning &#47; 72&#130;hour time enforcement tickets.
          <br />Appropriate license required!</FormText></Row>
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Move car
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Move motorcycle
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Move mo-ped
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Move large vehicle
                <Row><FormText color="muted">such as RV or camper</FormText></Row>
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>Pet chores </Row>
          <Row><FormText color="muted">Because our canine companions require a little more attention and care, Neighbor Favor
          cannot be responsible for the care of dogs and reccomends seeking other services for your furry friend.</FormText></Row>
          <Row>
            <Col xs="6" sm="4">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Play with cat
              </Label>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Feed cat and change water bowl
              </Label>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Change litter box
              </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Feed reptiles/rodents
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Clean tank
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Feed Fish
              </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Clean fish tank
              </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <br />

        <Container>
          <Button>Submit request!</Button>
        </Container>

      </Container>
    </div>
  )
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
