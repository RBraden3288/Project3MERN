import React from "react";
import "./App.css";
// Need to see where BrowserRouter, Route, and Link come into play
import { BrowserRouter, Route, Link } from "react-router-dom";
import HelloWorld from "../src/pages/Login";

// Add in what we want to show up inside the div tags
function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}
export default App;
