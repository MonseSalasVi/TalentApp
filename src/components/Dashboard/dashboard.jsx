
import React, { useState, useContext, useEffect } from 'react';
import Project from "./project";
import { UserContext } from '../../UserContext';
import { getTasks } from '../../UseFetch';
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "../Layout/Layout.jsx";

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
            setTasks(newArray)
         
        } catch(err) {
          alert("error al obtener tasks");
        }
    }


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
        Hola {user.name}, estas son las tareas para el día de hoy
      </h1>
      { tasks.length == 0 ? <CircularProgress/> : <Project tasks={tasks} />}
    </div>
  </Layout>
  )
};

export default Dashboard;