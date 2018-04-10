import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class Menu1 extends Component {
  render() {
    return (
      <div>
        <div>
        <Paper style={estilo.style}>
          <FlatButton label="Registro" style={{ margin: 12 }} />
          <FlatButton label="Galeria" style={{ margin: 12 }} />
          <FlatButton label="Actualizar" style={{ margin: 12 }} />
        </Paper>
      </div>
    </div>

    );
  }
}
const estilo = {
  style: {
  display: 'flex',
  width: 267,
  height: 545,
  flexDirection: 'column',
  alignItems: 'center'
  }
};


export default Menu1;
