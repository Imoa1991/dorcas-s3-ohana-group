import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

const fr = new FileReader();

class App extends Component {

  constructor(props){
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.fileInput = React.createRef();
    this.temp = this.temp.bind(this);
    this.state = {
      copyright:'Awesome profile-cards @ 2018',
      adalab:'http://adalab.es/',
      titleD: 'Diseña',
      tituloRellena: 'Rellena',
      fontTypes: [ 'Ubuntu', 'Comic Sans', 'Montserrat' ],
      habilidades: [],
      name: "Nombre y Apellido",
      job: "Front End Developer",
      palette:1,
      tipography: 1,
      imageUrl: `url("https://i.imgur.com/EGpLjJ2.jpg")`
    };
      this.callAbilitiesAPI();
      this.changeName = this.changeName.bind(this);
      this.changeJob = this.changeJob.bind(this);
      this.changePalette = this.changePalette.bind(this);
      this.changeTipography = this.changeTipography.bind(this);
      this.writeImages = this.writeImages.bind(this);
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

handleImage(event) {
    const imageuser = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImages);
    fr.readAsDataURL(imageuser);
 }

writeImages(){
  console.log(fr.result)
    this.setState({
    imageUrl: `url("${fr.result}")`
 });
}




  callAbilitiesAPI = () => {
    const url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.skills);
      this.setState({
        habilidades: json.skills
      });
    });
  };

  temp = () => {
    let newTitle = prompt('¿Cómo quieres llamar el título "Diseña"?');
    this.setState({
      titleD: newTitle
    });
  }

  render() {

    return (
      <React.Fragment>
        <button className="botonTemporal" onClick={this.temp}>CLICAR AQUÍ PARA EVENTO TEMPORAL</button>
        <Page changeName={this.changeName} name={this.state.name}  changeJob={this.changeJob} job={this.state.job}  tituloRellena={this.state.tituloRellena} titleD={this.state.titleD} footerCopy={this.state.copyright} footerUrl={this.state.adalab} fontTypes={this.state.fontTypes} skills={this.state.habilidades} palette={this.state.palette} changePalette={this.changePalette} tipography={this.state.tipography} changeTipography={this.changeTipography} fileImageRef={this.fileInput} handleImage={this.handleImage} imageUrl={this.state.imageUrl} />
      </React.Fragment>
    );
  }
}

export default App;
