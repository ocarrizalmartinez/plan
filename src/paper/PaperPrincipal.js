import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Registro from '../registro/Registro';
import StepperLinear from '../Usuario/StepperLinear';
import ModificarUsuario from '../Usuario/ModificarUsuario';

class PaperPrincipal extends Component {
  render() {
    return (
      <div style = {{ display: 'flex', justifyContent: 'center' }}>
        <div style = { estilo.item }>
              <Registro/>
        </div>
      </div>

    );
  }
}
const estilo = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1
  },
  style1: {
  height: 565,
  width: 700,
  margin: 4,
  textAlign: 'center',
  display: 'inline-block',
  }
};


export default PaperPrincipal;
