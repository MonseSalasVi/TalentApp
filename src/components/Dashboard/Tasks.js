import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Counter from "../Counter/Counter";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.divider,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Tasks = ({ tasks }) => {
  console.log(tasks);
  
  const classes = useStyles();

  const onStop = (timeBlock) => {
    console.log(timeBlock);
  };

  return (!tasks ? (
    <CircularProgress />
  ) : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tarea</StyledTableCell>
            <StyledTableCell align="right">ID de Tarea</StyledTableCell>
            <StyledTableCell align="right">ID de Proyecto</StyledTableCell>
            <StyledTableCell align="right">Deadline</StyledTableCell>
            <StyledTableCell align="right">Temporizador</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((el) => (
            <TableRow key={el.id}>
              <TableCell component="th" scope="row">
                {el.description}
              </TableCell>
              <TableCell align="right">{el.id}</TableCell>
              <TableCell align="right">{el.taskid}</TableCell>
              <TableCell align="right">
                <Counter onStop={onStop} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ));
};

export default Tasks;
