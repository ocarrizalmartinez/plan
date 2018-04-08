import React, { Component } from 'react';
import PaperPrincipal from '../paper/PaperPrincipal';
import PaperMenu from '../paper/PaperMenu';
class App extends Component {
  render() {

    const { nuevo } = this.props;

    return (
      <div style = { estilo.item }>

          <div style = {{
            display: 'flex',
          flex: 1 }}>
            <div style = { estilo.inicio }>
              <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <h1 style = {{ fontSize: 30, color: '#FFFFFF' }}>PlanosTec</h1>
              </div>
            </div>
          </div>

          <div style = {{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', zIndex: 1 }}>

            <div style = { estilo.principal }>
              <PaperPrincipal/>
            </div>
            <div style = { estilo.menu }>
            <PaperMenu/>

            </div>
          </div>
      </div>

    );
  }
}
const estilo = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: '#FAFAFA'
  },
  inicio: {
    dispaly: 'flex',
  alignItems: 'center',
    width: '120%',
    marginTop: -8,
    marginLeft: -8,
    marginRight: -8,
    height: 100,
    backgroundColor: '#448AFF'
   },

  principal:{
    marginTop: 10,
    dispaly: 'flex',
    width: '80%',
    height: 570
  },
  menu: {
    marginTop: 15,
    dispaly: 'flex',
    width: '20%',
    height: 570
  }
};


export default App;
