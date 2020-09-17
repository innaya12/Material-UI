import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    useNextVariants: true,
    fontSize: "8"
  },
  grid :{
    alignContent: 'space-between'
  }, 
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 10,
        paddingBottom: 1,
        "&:last-child": {
          paddingRight: 2
        }
      }
    }
  }
});

export default theme;