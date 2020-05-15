import React, { useState, useContext, useEffect } from 'react';
import Project from "./project";
// import { findByLabelText } from "@testing-library/react";
// import UserData from "../access";
import { UserContext } from '../../UserContext';
import { getTasks } from '../../UseFetch';
// import UserTask from '../UserTask/UserTask';

const Dashboard = () => {
    const {user}  = useContext(UserContext)
    const [tasks, setTasks] = useState([]);

       useEffect(()=>{
            allTask()
        }, []);


    const allTask = async () => {
        try{
            const resp = await getTasks(user.staffid);
            const newArray = await resp.checklist_items.map(item => item)
            // console.log(newArray);    
            setTasks(newArray)
         
        } catch(err) {
          console.log(err);
           
          // alert("error al obtener tasks");
        }
    }


  return (
    <div className="container">
      <h1 style={{
          color: "grey",
          fontFamily: "Roboto, sains",
          display: "flex",
          justifyContent: "center",
        }} > Hola, {user.name} estas son las tareas para el día de hoy</h1>
      <Project tasks={tasks} />
    </div>
  );
};

export default Dashboard;
