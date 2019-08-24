import React from "react";
import NavigationBar from "../components/Navbar/";
import LoginGrid from "../components/LoginGrid";
import CarouselRS from "../components/Carousel";

import "../index.css";

const Login = props => (
  <div>
    {console.log("props i LoginSignup", props)}
    <NavigationBar />
    <CarouselRS />
    <br />
    <LoginGrid login={props.login} />
  </div>
);

export default Login;
