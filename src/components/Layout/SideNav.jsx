import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
//import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  link: {
    textDecoration: "none",
    color: "#4D4D4D",
  },
}));

const SideNav = ({ children }) => {
  const mystyle = {
    color: "grey",
    fontSize: "2.2rem",
    fontFamily: "Arial",
    textDecoration: "none",
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/dashboard" style={mystyle} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText className={classes.text} primary="Mis tareas" />
              </ListItem>
            </Link>
            <Link style={mystyle} to="/stats" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DonutLargeIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Estadísticas" />
              </ListItem>
            </Link>
            <Link style={mystyle} to="/access" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>{" "}
                <ListItemText primary="Salir" />
              </ListItem>{" "}
            </Link>{" "}
          </List>{" "}
        </div>{" "}
      </Drawer>{" "}
      <main className={classes.content}>
        <Toolbar /> {children}{" "}
      </main>{" "}
    </Fragment>
  );
};

export default SideNav;
