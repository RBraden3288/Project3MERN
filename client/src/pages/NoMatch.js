import React from "react";

import { Jumbotron } from "reactstrap";
import UserNavBar from "../components/UserNavBar";

const NoMatch = props => {
  return (
    <div>
      <UserNavBar />
      <Jumbotron />
      <br />
      <h2>Sorry to do this but...</h2>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
};

export default NoMatch;
