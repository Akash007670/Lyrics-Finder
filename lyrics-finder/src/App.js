import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </Router>
  );
}

export default App;
