import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
