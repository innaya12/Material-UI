import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries
} from "@devexpress/dx-react-chart-material-ui";
import { Grid } from '@material-ui/core';

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: Math.sin(i) / i, argument: i });
  }
  return data;
};
const data = generateData(2.5, 12, 0.5);

export default () => {
  return (
    <Grid container spacing={1}>
        <Paper>
            <Chart data={data} width={155} height={140}>
                <ArgumentAxis showGrid/>
                <ValueAxis/>
                <SplineSeries valueField="value" argumentField="argument"/>
            </Chart>
        </Paper>
    </Grid>

  );
}
