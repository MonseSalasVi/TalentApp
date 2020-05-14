import React, { useState } from "react";
import Task from "./task";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { getTasks } from "../../UseFetch";

const Project = () => {
  const [tasks, setTasks] = useState([{ id: "1" }, { id: "26" }]);
  return (
    <>
      <h1>Proyecto</h1>
      <a href="https://trello.com/claudiacustodiog/boards" target="blank">
        Trello
      </a>
      <Divider variant="middle" />
      <div>
        <h5>Tarea</h5>
        <h5>Estatus</h5>
        <h5>Tiempo</h5>
        <h5>Deadline</h5>
        <h5>Cronómetro</h5>
      </div>
      <Card>
        {tasks.map((t) => (
          <Task taskId={t.id} />
        ))}
      </Card>
    </>
  );
};

export default Project;
