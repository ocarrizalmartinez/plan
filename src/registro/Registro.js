import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import StepperRegistro from '../StepperRegistro/StepperRegistro';
class Registro extends Component {
  render() {
    return (
      <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ flexDirection: 'column'}}>
        <div>
          <h1>Registro</h1>
        </div>
          <div>
            <StepperRegistro/>
          </div>
            </div>

            <div style= {{ marginLeft: 50 }}>
            <div>
              <h1>Evidencias</h1>
            </div>
              <Paper style={estilo.evidencias} zDepth={2}>
              <div style = {{ flexDirection: 'row' }}>
              <div style= {{ height:20 }}>
                <h1></h1>
              </div>

              <div style = {{ flexDirection: 'row', display: 'flex' }} >
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              </div>

              <div style = {{ flexDirection: 'row', display: 'flex', marginTop: 10 }} >
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              </div>

              <div style = {{ flexDirection: 'row', display: 'flex', marginTop: 10 }} >
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              <div style = {{ marginLeft: 50 }}>
                <Paper style = {{ width: 100, height: 100,  }}>
                </Paper>
              </div>
              </div>

                <div style = {{ marginLeft: 200, marginTop: 80 }}>
                <RaisedButton
                label= "Aceptar"/>
                </div>
              </div>
              </Paper>
            </div>

        </div>


    );
  }
}
const estilo = {
  estilo: {
    alignItems: 'column',
      height: 480,
      width: 500,
      margin: 1
    },
  evidencias: {
    alignItems: 'column',
    flexDirection: 'row',
      height: 480,
      width: 350,
      margin: 1
      }
};

export default Registro;
