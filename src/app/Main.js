import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Index from './Index';

const Main = () => (
  <MuiThemeProvider>
      <Index/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

export default Main;
