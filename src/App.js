import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Access from "./components/access";
import Menu from "./components/menu";
import Dashboard from "./components/Dashboard/dashboard";
import Stats from "./components/stats";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Access} />{" "}
      <Menu>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />{" "}
          <Route exact path="/dashboard" component={Stats} />{" "}
        </Switch>{" "}
      </Menu>{" "}
    </Router>
  );
}

export default App;
