import React from "react";
import Task from "./task";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

const Project = () => {
  return (
    <>
      <h1>Projecto</h1>
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
        <Task />
      </Card>
    </>
  );
};

export default Project;
