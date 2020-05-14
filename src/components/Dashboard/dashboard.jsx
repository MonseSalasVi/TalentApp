import React from "react";
import Project from "./project";

const Dashboard = () => {
  return (
    <div className="container">
      <h1> Hola Usuario, estas son las tareas para el día de hoy</h1>
      <Project />
    </div>
  );
};

export default Dashboard;
