import React from 'react';
import NavigationBar from '../components/Navbar/';
import CarouselRS from '../components/Carousel';
import Grid from '../components/Login_SignUpGrid';

const Login = (props) => {
    return (
        <div>
            <NavigationBar />
            <CarouselRS />
            <br />
            <Grid />
        </div>
    )
}

export default Login;
