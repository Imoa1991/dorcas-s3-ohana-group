import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {

  constructor(props){
    super(props);
    this.temp = this.temp.bind(this);
    this.state = {
      copyright:'Awesome profile-cards @ 2018',
      adalab:'http://adalab.es/',
      titleD: 'Diseña',
      tituloRellena: 'Rellena',
      fontTypes: [ 'Ubuntu', 'Comic Sans', 'Montserrat' ],
      habilidades: ''
    };
    callAbilitiesAPI = () => {
      const url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.abilitiesList = json.skills;
      });
    };
  }

  temp = () => {
    let newTitle = prompt('¿Cómo quieres llamar el título "Diseña"?');
    this.setState({
      titleD: newTitle
    });
    console.log(this.state.titleD);
  }

  render() {

    return (

      <React.Fragment>
      <button className="botonTemporal" onClick={this.temp}>CLICAR AQUÍ PARA EVENTO TEMPORAL</button>
      <Page tituloRellena={this.state.tituloRellena} titleD={this.state.titleD} footerCopy={this.state.copyright} footerUrl={this.state.adalab} fontTypes={this.state.fontTypes}/>
      <label htmlFor="habilidaes">Habilidades </label>
        <select name="habilidades" id="habilidades" value={this.state.habilidades} onChange={this.filmGenero}>
          <option value="html">html</option>
          <option value="scss">scss</option>
          <option value="js">js</option>
        </select>
      </React.Fragment>
    );
  }
}

export default App;
