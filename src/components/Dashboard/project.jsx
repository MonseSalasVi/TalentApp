import React, { useState, useEffect } from "react";
import Task from "./task";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { getTasks, getProjects } from "../../UseFetch";

getTasks("7").then((data) => {
  console.log(data);
});

const Project = () => {
  const dummyArray = [{ id: "1" }, { id: "4" }, { id: "6" }];
  const [tasks, setTasks] = useState(dummyArray);
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProjects("1").then((data) => {
      setProject(data);
    });
  }, []);

  return (
    <>
      <h1>{project.name}</h1>
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
        {tasks.map((t, i) => (
          <Task key={i} taskId={t.id} />
        ))}
      </Card>
    </>
  );
};

export default Project;
