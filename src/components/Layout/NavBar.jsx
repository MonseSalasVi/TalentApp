import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#234C5B",
  },
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  subtitle: {
    color: "#C4C4C4",
    flexGrow: 1,
  },
}));

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Talent App
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          4040apps
        </Typography>
        <Typography> {today} </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
