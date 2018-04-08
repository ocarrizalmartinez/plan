import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class ModificarUsuario extends Component {
  render() {
    return (
      <div>
        <div style = {{ display: 'flex', justifyContent: 'center' }}>
        <h2>Modificar Usuario</h2>
        </div>

        <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
            <div style= {{ flexDirection: 'column'}}>

                <Paper style={estilo.estilo} zDepth={ 2 }>
                <div style = {{ justifyContent: 'center', display: 'flex' }}>
                  <h3>Usuario</h3>
                </div>

                  <div style= {{ height:20 }}></div>

                    <div style = {{ marginLeft:70}}>

                      <Text
                      etiqueta = "Usuario actual"
                      /><br/>

                      <Text
                      etiqueta = "Nuevo Usuario"
                      /><br/>

                      <Text
                      etiqueta = "Contraseña"
                      type="password"
                      /><br/>

                      </div>
                      <div style = {{ marginLeft: 200 }}>
                        <RaisedButton label="Actualizar" style={{ margin: 12 }} />
                      </div>

                  </Paper>
                </div>

                <div style= {{ marginLeft: 50 }}>
                <Paper style={estilo.evidencias} zDepth={ 2 }>
                <div style = {{ justifyContent: 'center', display: 'flex' }}>
                  <h3>Contraseña</h3>
                </div>
                    <div style= {{ height:20 }}></div>

                    <div style = {{ marginLeft:70 }}>
                      <Text
                      etiqueta = "Contraseña actual"
                      type="password"
                      /><br/>
                      <Text
                      etiqueta = "Nueva contraseña"
                      type="password"
                      /><br/>

                      <Text
                      etiqueta = " Confirmar nueva contraseña"
                      type="password"
                      /><br/>
                    </div>

                    <div style = {{ marginLeft: 200 }}>
                      <RaisedButton label="Actualizar" style={{ margin: 12 }} />
                    </div>
                  </Paper>
                </div>
              </div>
        </div>


    );
  }
}
const estilo = {
  estilo: {
    alignItems: 'column',
      height: 400,
      width: 400,
      margin: 1
    },
  evidencias: {
    alignItems: 'column',
      height: 400,
      width: 400,
      margin: 1
      }
};

export default ModificarUsuario;
