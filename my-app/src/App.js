import React from 'react';
import Content from './components/contnet';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider,createMuiTheme } from "@material-ui/core/styles";
import { Grid} from '@material-ui/core';
import theme from './components/theme';
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content/>
        </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
