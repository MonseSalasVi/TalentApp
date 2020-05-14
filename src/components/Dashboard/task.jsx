import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { getTasks } from "../../UseFetch";

const Task = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTasks(taskId).then((data) => {
      setTask(data);
    });
  }, [taskId]);

  return !task ? (
    <>Loading...</>
  ) : (
    //map para las tasks
    <Card>
      <h4>{task.name}</h4>
      <p>00:00:00</p>
      <p>08/06/20</p>
    </Card>
  );
};

export default Task;
