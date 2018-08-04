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
      skillsList: [],
      skillsNumber: 1,
      skillsSelected: [],
    };
      this.callAbilitiesAPI();
  }

  callAbilitiesAPI = () => {
    const url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        skillsList: json.skills
      });
    });
  };

  temp = () => {
    let newTitle = prompt('¿Cómo quieres llamar el título "Diseña"?');
    this.setState({
      titleD: newTitle
    });
    console.log(this.state.titleD);
  }

handleSelectSkills = (newSkill,position) => {
  const currentSkillsSelected = this.state.skillsSelected;
  currentSkillsSelected.splice(position,1,newSkill);
    this.setState({
      skillsSelected: currentSkillsSelected
    });
}

handleNumberOfSelects = clickedSelected => {
  console.log(clickedSelected);
  if (clickedSelected.classList.contains('fa-plus')) {
    if (this.state.skillsNumber < 3) {
        let currentNumbber = this.state.skillsNumber;
        currentNumbber += 1;
        this.setState({
          skillsNumber: currentNumbber
        })
    }
  } else {
      if (this.state.skillsNumber > 1) {
        let currentNumbber = this.state.skillsNumber;
        currentNumbber -= 1;
        this.setState({
          skillsNumber: currentNumbber
        })
      }
    }
}

  render() {

    return (

      <React.Fragment>
      <button className="botonTemporal" onClick={this.temp}>CLICAR AQUÍ PARA EVENTO TEMPORAL</button>
      <Page
          tituloRellena={this.state.tituloRellena}
          titleD={this.state.titleD}
          footerCopy={this.state.copyright}
          footerUrl={this.state.adalab}
          fontTypes={this.state.fontTypes}
          skillsList={this.state.skillsList}
          skillsNumber={this.state.skillsNumber}
          handleSelectSkills={this.handleSelectSkills}
          handleNumberOfSelects={this.handleNumberOfSelects}
          skillsSelected={this.state.skillsSelected}
      />

      </React.Fragment>
    );
  }
}

export default App;
