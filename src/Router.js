import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppBar from "./components/AppBar/appBar";
import Access from "./components/access";
import Dashboard from "./components/Dashboard/dashboard";
import Stats from "./components/stats";

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
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Drawer
          style={{
            width: "240px",
          }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <Link to="/dashboard" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Mis tareas" />
              </ListItem>{" "}
            </Link>{" "}
            <Link to="/stats" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DonutLargeIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Estadísticas" />
              </ListItem>{" "}
            </Link>{" "}
            <Link to="/access" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Salir" />
              </ListItem>{" "}
            </Link>{" "}
          </List>{" "}
        </Drawer>{" "}
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />{" "}
          <Route exact path="/stats" component={Stats} />{" "}
          <Route exact path="/access" component={Access} />{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
};

export default Routes;
