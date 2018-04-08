import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

class Registro extends Component {
  render() {
    return (
      <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ flexDirection: 'column'}}>
        <div>
          <h1>Registro</h1>
        </div>
            <Paper style={estilo.estilo} zDepth={2}>
              <div style= {{ height:10 }}>
                <h1></h1>
              </div>
              <div
            style = {{
            marginLeft:50, marginTop: 30 }}  >

                <Text
                etiqueta = "Nombre"/><br/>
                <p3>Fecha de inicio</p3>
                <DatePicker hintText="00-00-00" /><br/>
                <p3>Fecha de termino</p3>
                <DatePicker hintText="00-00-00" />

                <Text
                etiqueta = "Correo"
                /><br/>

                <Text
                etiqueta = "Dirección"
                /><br/>
                </div>

              </Paper>
            </div>

            <div style= {{ marginLeft: 50 }}>
            <div>
              <h1>Evidencias</h1>
            </div>
              <Paper style={estilo.evidencias} zDepth={2}>
              </Paper>
            </div>

        </div>


    );
  }
}
const estilo = {
  estilo: {
    alignItems: 'column',
      height: 500,
      width: 400,
      margin: 1
    },
  evidencias: {
    alignItems: 'column',
      height: 500,
      width: 350,
      margin: 1
      }
};

export default Registro;
