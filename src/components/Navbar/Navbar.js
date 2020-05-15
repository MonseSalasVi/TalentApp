import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
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
/* import AppBar from "./components/AppBar/appBar"; */

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Talent App{" "}
          </Typography>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}> </div>{" "}
        <List>
          <Link to="/dashboard" className={classes.link}>
            {" "}
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Mis tareas" />
              </ListItem>
            ))}{" "}
          </Link>{" "}
          <Link to="/stats" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <DonutLargeIcon />
              </ListItemIcon>{" "}
              <ListItemText primary="Estadísticas" />
            </ListItem>{" "}
          </Link>{" "}
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>{" "}
              <ListItemText primary="Salir" />
            </ListItem>{" "}
          </Link>{" "}
        </List>{" "}
      </Drawer>{" "}
      <div className={classes.offset}> </div>{" "}
    </div>
  );
};
export default Navbar;
