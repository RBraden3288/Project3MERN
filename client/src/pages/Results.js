import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";
import RequestResults from "../components/RequestResults";

const Results = (props) => {
    return (
        <div>
            <UserNavBar />
            <RequestResults />
        </div>
    )
}

export default Results;