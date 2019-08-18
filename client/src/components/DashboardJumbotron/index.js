import React, { Component } from 'react';
import {
    Jumbotron,
    Container
} from 'reactstrap';

class DashboardJumbotron extends Component {
render() {
    var styles ={
        "backgroundImage": 'url("https://i.ibb.co/5jbtrZN/IMG-7398.jpg")',
      }
 
      return (
        <Jumbotron fluid style={styles}>
            <Container fluid>
                <h1 className="display-3">Welcome, {props.children}</h1>
                <p className="lead">Here you can view open requests and change your availability.</p>
            </Container>
        </Jumbotron>
    )
};
}

export default DashboardJumbotron;

