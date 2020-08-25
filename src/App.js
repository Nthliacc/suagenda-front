import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Router } from './components/Router';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#5424af'
    },
    secondary: {
      main: '#44cb34'
    }
  }
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      < Router />
    </ThemeProvider>
  );
};