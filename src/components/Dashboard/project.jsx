import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Task from "./task";
// import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
// import { getTasks, getProjects } from "../../UseFetch";
// import Box from "@material-ui/core/Box";
import { allTasks } from "../../UseFetch";

const Project = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    allTasks().then((data) => {
      console.log(data);
      setTasks(data);
    });
  }, []);

  return !tasks ? (
    <CircularProgress />
  ) : (
    <div>
      {tasks.map((el, index) => (
        <Card>
          <h4>Task Name: {el.name}</h4>
          <h5>Task ID: {el.id}</h5>
          <h5>Project: {el.rel_id}</h5>
        </Card>
      ))}
    </div>
  );
};

export default Project;
