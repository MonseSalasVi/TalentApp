import React, { useState, useEffect } from "react";
import { getTasks } from "../../UseFetch";
import Fab from "@material-ui/core/Fab";

// Css Materia-ui
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Task = ({ taskId }) => {
  const classes = useStyles();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTasks(taskId).then((data) => {
      setTask(data);
    });
  }, [taskId]);

  return !task ? (
    <CircularProgress />
  ) : (
    <Card>
      <div style={{ width: "100%" }}>
        <Box display="flex" p={1} bgcolor="background.paper">
          <Box p={1} width="100%" bgcolor="grey.100">
            <h4>{task.name}</h4>
          </Box>

          <Box p={1} flexShrink={2} bgcolor="grey.100">
            <Fab variant="extended">
              <NavigationIcon className={classes.extendedIcon} />
              <p>00:00:00</p>
            </Fab>
          </Box>
          <Box p={1} flexShrink={1} bgcolor="grey.00">
            <p>{task.duedate}</p>
          </Box>
        </Box>
      </div>
    </Card>
  );
};

export default Task;
