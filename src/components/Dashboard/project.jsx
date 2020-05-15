import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Card from "@material-ui/core/Card";
// import Task from "./task";
import Divider from "@material-ui/core/Divider";

// import { getTasks, getProjects } from "../../UseFetch";
// import Box from "@material-ui/core/Box";
import { allTasks } from "../../UseFetch";
import Counter from "../Counter/Counter.jsx";


const Project = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    allTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  const onStop = (timeBlock) => {
    console.log(timeBlock);
  };

  return !tasks ? (
    <CircularProgress />
  ) : (
    <div>
      {tasks.map((el, index) => (
        <Card>

          <h4>Task Name: {el.name}</h4>
          <h5>Task ID: {el.id}</h5>
          <h5>Project: {el.rel_id}</h5>
          {/* tiempo de inicio, tiempo de tiempo de finalizar , tiempo transcurrido*/}
          <Counter onStop={onStop} />

        </Card>
      ))}
    </div>
  );
};

export default Project;
