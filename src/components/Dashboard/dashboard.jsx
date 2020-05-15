import React, { useState, useContext } from 'react';
import Project from "./project";
import { findByLabelText } from "@testing-library/react";
import UserData from "../access";
import { UserContext } from '../../UserContext'

const Dashboard = () => {
    const {user}  = useContext(UserContext)

  return (
    <div className="container">
      <h1 style={{
          color: "grey",
          fontFamily: "Roboto, sains",
          display: "flex",
          justifyContent: "center",
        }} > Hola, {user.name} estas son las tareas para el día de hoy</h1>
      <Project />
    </div>
  );
};

export default Dashboard;
