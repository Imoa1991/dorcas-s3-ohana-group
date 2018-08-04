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
      name: "Nombre y Apellido",
      job: "Front End Developer",
      palette:1,
      tipography: 1,
      skillsList: [],
      skillsNumber: 1,
      skillsSelected: [],
    };
      this.callAbilitiesAPI();
      this.changeName = this.changeName.bind(this);
      this.changeJob = this.changeJob.bind(this);
      this.changePalette = this.changePalette.bind(this);
      this.changeTipography = this.changeTipography.bind(this);
  }

changeName(e){
  this.setState({
    name: e.currentTarget.value
  })
};

changeJob(e){
  this.setState({
    job: e.currentTarget.value
  })
};
changePalette(e){
  this.setState({
    palette: e.currentTarget.value
  })
};
changeTipography(e){
  this.setState({
    tipography: e.currentTarget.value
  })
};
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
        const position = clickedSelected.parentElement.getAttribute('data-buttonNumber');
        const currentSkillsSelected = this.state.skillsSelected;
        currentSkillsSelected.splice(position,1);
          this.setState({
            skillsSelected: currentSkillsSelected
          });
      }
    }
}

  render() {

    return (
      <React.Fragment>
      <button className="botonTemporal" onClick={this.temp}>CLICAR AQUÍ PARA EVENTO TEMPORAL</button>
      <Page
          changeName={this.changeName}
          name={this.state.name}
          changeJob={this.changeJob}
          job={this.state.job}
          palette={this.state.palette}
          changePalette={this.changePalette}
          tipography={this.state.tipography}
          changeTipography={this.changeTipography}
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
