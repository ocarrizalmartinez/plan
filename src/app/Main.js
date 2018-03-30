import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Boton from '../comunes/Boton';

const Main = () => (
  <MuiThemeProvider>
    <Boton />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

export default Main;
