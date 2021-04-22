import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the React app
ReactDOM.render(<App />, document.getElementById("root"));

// Register service worker
registerServiceWorker();