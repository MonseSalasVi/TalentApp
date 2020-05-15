import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import { yellow } from "@material-ui/core/colors";
import Counter from "./Counter/Counter.jsx";
import chart from "./chart.png";

const Stats = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h4" gutterBottom>
        <WarningIcon style={{ color: yellow[500] }} />
        El área de estadísticas está en construcción
        <WarningIcon style={{ color: yellow[500] }} />
      </Typography>
      <img src={chart} alt="donut chart" />
      <Counter />
    </Grid>
  );
};

export default Stats;
