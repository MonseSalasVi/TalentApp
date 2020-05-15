import React, { useState, useEffect } from "react";
import Task from "./task";
import { getTasks, getProjects } from "../../UseFetch";

// Css Materia-ui
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

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
      <div>
        <h1>{project.name}</h1>
        <a href="https://trello.com/claudiacustodiog/boards" target="blank">
          Trello
        </a>
        <Divider variant="middle" />
      </div>

      <div style={{ width: "100%" }}>
        <Box display="flex" p={1} bgcolor="background.paper">
          <Box p={1} width="100%" bgcolor="grey.300">
            <h5>Tarea</h5>
          </Box>
          <Box p={1} flexShrink={3} bgcolor="grey.300">
            <h5>Estatus</h5>
          </Box>
          <Box p={1} flexShrink={2} bgcolor="grey.300">
            <h5>Deadline</h5>
          </Box>
          <Box p={1} flexShrink={1} bgcolor="grey.300">
            <h5>Tiempo</h5>
          </Box>
          <Box p={1} flexShrink={0} bgcolor="grey.300">
            <h5>Cronómetro</h5>
          </Box>
        </Box>
      </div>

      <div>
        <Card>
          {tasks.map((t, i) => (
            <Task key={i} taskId={t.id} />
          ))}
        </Card>
      </div>
    </>
  );
};

export default Project;
