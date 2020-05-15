import React, { useState, useEffect } from "react";
import Task from "./task";
import CircularProgress from "@material-ui/core/CircularProgress";

// css Materia-ui
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { getTasks, getProjects } from "../../UseFetch";
import Box from "@material-ui/core/Box";
import { allTasks } from "../../UseFetch";
import Counter from "../Counter/Counter.jsx";
import Tasks from "../Tasks";
import { CardHeader, CardContent } from "@material-ui/core";

const Project = () => {
  const mystyle = {
    color: "grey",
    fontSize: "1.5rem",
    fontFamily: "Arial",
  };
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
    <>
      <div>
        {/*  <h1>{project.name}</h1> */}
        <a
          style={mystyle}
          href="https://trello.com/claudiacustodiog/boards"
          target="blank"
        >
          Trello
        </a>
        <Divider variant="middle" />
      </div>
      <div>
        <Card>
          <CardContent>
            <Tasks tasks={tasks} />
          </CardContent>
        </Card>
        {/* {tasks.map((el, index) => (
          <Card>
            <h4>Task Name: {el.name}</h4>
            <h5>Task ID: {el.id}</h5>
            <h5>Project: {el.rel_id}</h5>
            tiempo de inicio, tiempo de tiempo de finalizar , tiempo transcurrido
          </Card>
        ))} */}
      </div>
    </>
  );
};

export default Project;

/* <div>
<Card>
  {tasks.map((t, i) => (
    <Task key={i} taskId={t.id} />
  ))}
  //  <Counter onStop={onStop} /> 
</Card>
</div> */
