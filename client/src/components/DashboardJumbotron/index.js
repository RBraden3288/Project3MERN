import React, { Component } from 'react';
import {
    Jumbotron,
    Container
} from 'reactstrap';

function DashboardJumbotron (props) {
    return(
<Jumbotron fluid>
<Container fluid>
  <h1 className="display-3">Welcome, {props.children}</h1>
  <p className="lead">Here you can view open requests and change your availability.</p>
</Container>
</Jumbotron>
    )
};

export default DashboardJumbotron;

