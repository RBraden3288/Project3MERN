import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // var test = auth.getJwt();
      // console.log(auth.getJwt())
      auth.getJwt() ? (
        <Component {...props} />
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

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         auth.getToken() !== null ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signup",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
// );
