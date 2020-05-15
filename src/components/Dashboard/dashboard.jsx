import React, { useState, useContext, useEffect } from 'react';
import Project from "./project";
import UserData from "../access";
import { UserContext } from '../../UserContext';
import { getTasks } from '../../UseFetch';
import UserTask from '../UserTask/UserTask';

const Dashboard = () => {
    const {user}  = useContext(UserContext)
    const {task, setTask} = useState('');

       useEffect(()=>{
            allTask()
        }, []);


    const allTask = async () => {
        try{
            const resp = await getTasks(user.staffid);
            console.log(resp.checklist_items)
            const array = new Array();
             array.push(resp.checklist_items.description)
                setTask(array)
                   console.log(task)


        } catch(err) {
            alert("error al obtener tasks");
        }
    }


  return (
    <div className="container">
      <h1> Hola, {user.name} estas son las tareas para el día de hoy</h1>
      <UserTask taskList={1}/>
      <Project />
    </div>
  );
};

export default Dashboard;
