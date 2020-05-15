import React, { useState, useContext } from 'react';
import Project from "./project";
import UserData from "../access";
import { UserContext } from '../../UserContext'


const Dashboard = () => {
    const {user}  = useContext(UserContext)

  return (
    <div className="container">
      <p>{user}</p>
      <h1> Hola, {JSON.stringify(user)} estas son las tareas para el día de hoy</h1>
      <Project />
    </div>
  );
};

export default Dashboard;
