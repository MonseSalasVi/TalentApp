import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getTasks } from "../../UseFetch";

const Task = ({ taskId }) => {
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
      <h4>{task.name}</h4>
      <p>00:00:00</p>
      <p>{task.duedate}</p>
    </Card>
  );
};

export default Task;
