import React from 'react';
// import './App.css';
// import {Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Content from './components/contnet'

const useStyles = makeStyles({
  newStyle :{
    fontSize: "50px",
    color: "Pink"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
    </Grid>
    // <div className="App">
    //   <Typography
    //   className={classes.newStyle}>hiiiiiii</Typography>
    //   <header className="App-header">
       
    //     <Button color="primary">ggggggggggg</Button>
    //   </header>
    // </div>
  );
}

export default App;
