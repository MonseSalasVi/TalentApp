import React, { useState, useContext } from "react";
import { getStaffs } from "../UseFetch";
import { useHistory } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: "6%",
    backgroundColor: "#E5E5E5",
    width: "250px",
  },
  button: {
    marginTop: "4%",
    backgroundColor: "#FAD000",
    borderRadius: "30px",
    width: "150px",
  },
  p: {
    color: "#C4C4C4",
    fontFamily: "Roboto",
  },
  h1: {
    color: "#234C5B",
    fontSize: "50px",
    margin: "5% 0 0 0",
    fontFamily: "Roboto",
  },
}));

const Access = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const history = useHistory();
  console.log(user);
  async function searchUserinData() {
    try {
      const response = await getStaffs(email);
      const obj = {};
      obj.staffid = response[0].staffid;
      obj.name = response[0].firstname;
      setUser(obj);
      history.push("/dashboard");
    } catch (error) {
      alert("Por favor Revise sus datos y vuelva a intentar");
    }
  }

  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1 className={classes.h1}>Task Manager</h1>
      <p className={classes.p}>4040apps</p>
      <TextField
        className={classes.input}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="outlined-basic"
        label="email"
        variant="outlined"
      />

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={searchUserinData}
        type="submit"
      >
        Ingresar
      </Button>
    </Grid>
  );
};

export default Access;
