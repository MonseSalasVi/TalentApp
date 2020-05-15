import React from "react";
import Project from "./project";
import { findByLabelText } from "@testing-library/react";

const Dashboard = () => {
  return (
    <div className="container">
      <h1
        style={{
          color: "grey",
          fontFamily: "Roboto, sains",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        Hola Usuario, estas son las tareas para el día de hoy
      </h1>
      <Project />
    </div>
  );
};

export default Dashboard;
