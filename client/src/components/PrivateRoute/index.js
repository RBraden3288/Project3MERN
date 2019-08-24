import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../utils/auth";

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.getJwt() ? (
        render ? (
          render(props)
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
