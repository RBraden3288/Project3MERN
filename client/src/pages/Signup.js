import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/';
import Grid from '../components/Login_SignUpGrid/'
import {
    Container,
    Col,
    Row,
    Label,
    Input,
    Button, 
    FormText
} from 'reactstrap';

class Signup extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // newUser: {
                // this will hold an array of objects identifying the user
                firstName: "",
                lastName: "",
                email: this.props.location.state.emailInput,
                neighborhood: "",
                password: "",
                bio: "",
                photo_url: ""
            // }
        };
        console.log(this.state.firstName)
    
        //bind the methods to "this"
        this.handleChange = this.handleChange.bind(this);
    }
        //event handlers and functions to handle form submission
        handleChange = event => {
            const { name, value } = event.target
            this.setState({
                [name]: value,
            })
        }

        handleSubmit = event => {
            event.preventDefault();
            console.log(`Form submitted: `, this.state);
        }

        // componentWillMount () {
        //     const { emailInput } = this.props.location.state
        //     console.log(emailInput);
        // }
    
    render() {
        return (
            <div>
            <NavigationBar />
            <Container>
            <form onSubmit={this.handleSubmit}>
                <Row>
                <Col xs='6'>
                <Label>First Name
                    <Input 
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                </Label>
                </Col>
                <Col xs='6'>
                <Label>Last Name
                    <Input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    />
                </Label>
                </Col>
                </Row>

                <Row>
                    <Col>
                    <Label>Email
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                                 <Label>Choose Your Neighborhood

                <Input 
                        value={this.state.neighborhood}
                        onChange={this.handleChange}
                        type="select" 
                        name="neighborhood" >
                        <option>Fisherman&apos;s Wharf</option>
                        <option>North Beach</option>
                        <option>Chinatown</option>
                        <option>Embarcadero &#47; Financial District</option>
                        <option>SOMA &#47; Yerba Buena</option>
                        <option>Union Square</option>
                        <option>Central Market</option>
                        <option>Castro &#47; Noe Valley</option>
                        <option>Civic Center &#47; Hayes Valley</option>
                        <option>Haight&#45;Ashbury</option>
                        <option>Fillmore</option>
                        <option>Japantown</option>
                        <option>Nob Hill</option>
                        <option>Marina &#47; Pacific Heights</option>
                        <option>Presidio &#47; Richmond</option>
                        <option>Sunset</option>
                        <option>Bayview</option>
                        <option>Treasure Island</option>
                        <option>Mission District</option>

                    </Input>
                    </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Label>About me
                        <Input
                                            type="text"
                                            name="bio"
                                            value={this.state.bio}
                                            onChange={this.handleChange}
                                            />
                    </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Label>Photo URL
                    <FormText color="muted">
                    Link and share a URL of your image from an image hosting and sharing service.
                   </FormText>
                        <Input
                                            type="url"
                                            name="photo_url"
                                            value={this.state.photo_url}
                                            onChange={this.handleChange}
                                            />
                    </Label>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                    <Label>Password
                        <Input
                                            type="text"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            />
                    </Label>
                    </Col>
                    <Col xs="6">
                    <Label>Verify password
                        <Input
                                            type="text"
                                            name="verifypassword"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            />
                    </Label>
                    </Col>
                </Row>

                <Button type="submit" value="Submit" outline color="success">Create my account!</Button>
            </form>
            </Container>
            </div>
        )
    }
}

export default Signup;