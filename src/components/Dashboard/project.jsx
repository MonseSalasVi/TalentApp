import React, { useState } from "react";
import Task from "./task";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { getTasks } from "../../UseFetch";

const Project = () => {
  const [tasks, setTasks] = useState([{ id: "1" }, { id: "26" }]);
  return (
    <>
      <div>
        <h1>Proyecto</h1>
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
          {tasks.map((t) => (
            <Task taskId={t.id} />
          ))}
        </Card>
      </div>
    </>
  );
};

export default Project;
