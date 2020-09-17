import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {data1,data2, data3} from '../data/data';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './buttonAppBar';
    
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
    // padding: theme.spacing(2, 'auto'),   
  },
});

function SimpleTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
        {/* <ButtonAppBar/> */}
      <Table className={classes.table} >
        <TableHead>
      <TableRow >
          <TableCell>Currency</TableCell>
              <TableCell numeric>bid</TableCell>
              <TableCell numeric>ask</TableCell>
              <TableCell numeric>high</TableCell>
              <TableCell numeric>low</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
          {data1.map(({ currency, bid, ask, high, low}) => (
              <TableRow key={bid}>
              <TableCell component="th" scope="row">
                  {currency}
              </TableCell>
              <TableCell numeric>{bid}</TableCell>
              <TableCell numeric>{ask}</TableCell>
              <TableCell numeric>{high}</TableCell>
              <TableCell numeric>{low}</TableCell>
              </TableRow>
          ))}
      </TableBody>
    </Table>
  </Paper>
  )
};


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
