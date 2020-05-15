import React, { useContext } from "react";
import Project from "./project";
import { UserContext } from "../../UserContext";
import Layout from "../Layout/Layout.jsx";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className="container">
        <h1
          style={{
            color: "grey",
            fontFamily: "Roboto, sains",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Hola {user.name}, estas son las tareas para el día de hoy{" "}
        </h1>{" "}
        <Project />
      </div>{" "}
    </Layout>
  );
};

export default Dashboard;
