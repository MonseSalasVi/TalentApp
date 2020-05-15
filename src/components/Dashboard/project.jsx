import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { allTasks } from "../../UseFetch";
import Tasks from "./Tasks";
import { CardContent } from "@material-ui/core";

const Project = ({tasks}) => {
  // console.log(tasks);
  
  const mystyle = {
    color: "grey",
    fontSize: "1.5rem",
    fontFamily: "Arial",
  };


  return (
    <>
      <div>
        <Divider variant="middle" />
      </div>{" "}
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
