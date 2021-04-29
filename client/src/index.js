import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.scss";
import App from "./App";

// Importing the Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// Render the React app
ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("root")
);