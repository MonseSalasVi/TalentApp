import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Access from "./components/access";
import Dashboard from "./components/Dashboard/dashboard";
import Stats from "./components/stats";

const Routes = () => {
  return (
    <Router>
      <UserContextProvider>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />{" "}
          <Route exact path="/stats" component={Stats} />{" "}
          <Route exact path="/" component={Access} />{" "}
        </Switch>{" "}
      </UserContextProvider>{" "}
    </Router>
  );
};

export default Routes;
