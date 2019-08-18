import React from "react";
import {
  Container,
  Media,
  Col,
  Row,
  Button
} from 'reactstrap';
import axios from 'axios';

export default class RequestResults extends React.Component {
  constructor(props) {
    super(props)
    // empty requests array
     this.state = {
       userRequests: []
    }
  }

  //handle axios request
  // componentDidMount() {
  //   //axios request to BE for requests
  //   axios.get('/api/requests/' + )
  //   //set userRequests state with array of data
  // };

  render() {
    return (
      <Container>
        <Media>
          <Col xs="3">
            <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="user photo_url" />
            </Media>
          </Col>
          <Col xs="6">
            <Media body>
              <Media heading>
                This will hold the first name of a response
        </Media>
              <Row>
                This will hold their bio
        </Row>
              <Row>
                This will hold their skills
        </Row>
            </Media>
          </Col>
          <Col xs="3">
            <Button size="sm">Request me!</Button>
          </Col>
        </Media>
      </Container>
    )
  }
}