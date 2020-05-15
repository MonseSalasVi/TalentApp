import React, { useState, useEffect } from "react";
import Task from "./task";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { getTasks, getProjects } from "../../UseFetch";
import Box from "@material-ui/core/Box";
//import Task from "./task";
import { allTasks } from "../../UseFetch";
import Counter from "../Counter/Counter.jsx";
import Tasks from "../Tasks";
import { CardHeader, CardContent } from "@material-ui/core";


const Project = ({tasks}) => {
  // console.log(tasks);
  
  const mystyle = {
    color: "grey",
    fontSize: "1.5rem",
    fontFamily: "Arial",
  };
  // const [tasks, setTasks] = useState(null);

  // useEffect(() => {
  //   allTasks().then((data) => {
  //     setTasks(data);
  //   });
  // }, []);

  return !tasks ? (
    <CircularProgress />
  ) : (
    <>
      <div>
        {/*  <h1>{project.name}</h1> */}
        <a
          style={mystyle}
          href="https://trello.com/claudiacustodiog/boards"
          target="blank"
        >
          Trello
        </a>
        <Divider variant="middle" />
      </div>
      <div>
        <Card>
          <CardContent>
            {/* {tasks.map(item => ( <Tasks task={item} /> ))} */}
            <Tasks tasks={tasks} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Project;
