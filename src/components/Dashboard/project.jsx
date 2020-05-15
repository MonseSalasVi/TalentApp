import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { allTasks } from "../../UseFetch";
import Tasks from "./Tasks";
import { CardContent } from "@material-ui/core";

const Project = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    allTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return !tasks ? (
    <CircularProgress />
  ) : (
    <>
      <div>
        <Divider variant="middle" />
      </div>{" "}
      <div>
        <Card>
          <CardContent>
            <Tasks tasks={tasks} />{" "}
          </CardContent>{" "}
        </Card>{" "}
      </div>{" "}
    </>
  );
};

export default Project;
