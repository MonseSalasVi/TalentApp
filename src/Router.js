import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import { makeStyles } from "@material-ui/core/styles";
import Access from "./components/access";
import Dashboard from "./components/Dashboard/dashboard";
import Stats from "./components/stats";
import Layout from "./components/Layout/Layout";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  },
}));

const Routes = () => {
  const classes = useStyles();

  return (
    <Router>
      <UserContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />{" "}
            <Route exact path="/stats" component={Stats} />{" "}
            <Route exact path="/access" component={Access} />{" "}
          </Switch>
        </Layout>
      </UserContextProvider>
    </Router>
  );
};

export default Routes;
