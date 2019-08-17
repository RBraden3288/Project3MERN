import React from "react";
import NavigationBar from "../components/Navbar/";
import CarouselRS from "../components/Carousel";
import Grid from "../components/Login_SignUpGrid";

const Login = props => {
  return (
    <div>
      {console.log("props i LoginSignup", props)}
      <NavigationBar />
      <CarouselRS />
      <br />
      <Grid
        // {...props}
        login={props.login}
        // authenticatedRedirect={props.redirectToReferrer}
      />
    </div>
  );
};

export default Login;
