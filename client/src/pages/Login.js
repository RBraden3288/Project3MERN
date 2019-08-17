import React from 'react';
import NavigationBar from '../components/Navbar/';
import Grid from '../components/Login_SignUpGrid';
import CarouselRS from '../components/Carousel';

import '../index.css';

const Login = (props) => {
    
    return (
        <div>
            <NavigationBar />
            <div>
            <CarouselRS />
            <Grid />
            </div>
        </div>
    )
}

export default Login;
