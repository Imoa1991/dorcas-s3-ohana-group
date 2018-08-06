import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

const fr = new FileReader();

class App extends Component {

  constructor(props){
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      name: "Nombre y Apellido",
      job: "Front End Developer",
      palette:1,
      tipography: 1,
      email:'',
      phone:'',
      linkedin:'',
      github:''
      imageUrl: `url("https://i.imgur.com/EGpLjJ2.jpg")`,
      skillsList: [],
      skillsNumber: 1,
      skillsSelected: [],

    };
      this.callAbilitiesAPI();
      this.changeName = this.changeName.bind(this);
      this.changeJob = this.changeJob.bind(this);
      this.changePalette = this.changePalette.bind(this);
      this.changeTipography = this.changeTipography.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changePhone = this.changePhone.bind(this);
      this.changeLinkedin = this.changeLinkedin.bind(this);
      this.changeGithub = this.changeGithub.bind(this);
      this.writeImages = this.writeImages.bind(this);
      this.handleImage = this.handleImage.bind(this);
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

changeEmail(e){
  this.setState({
    email:'mailto:'+ e.currentTarget.value
  })

};
changePhone(e){
  this.setState({
    phone:'tel: +34'+ e.currentTarget.value
  })
};
changeLinkedin(e){
  this.setState({
    linkedin:'https://www.linkedin.com/in/'+ e.currentTarget.value
  })
};
changeGithub(e){
  this.setState({
    github:'https://github.com/'+ e.currentTarget.value
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
      this.setState({
        skillsList: json.skills
      });
    });
  };


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

resetCard = () => {
  this.setState({
    name: "Nombre y Apellido",
      job: "Front End Developer",
      palette:1,
      tipography: 1,
      skillsNumber: 1,
      skillsSelected: [],
  })
}

  render() {

    return (
      <React.Fragment>

      <Page
          changeName={this.changeName}
          name={this.state.name}
          changeJob={this.changeJob}
          job={this.state.job}
          palette={this.state.palette}
          changePalette={this.changePalette}
          tipography={this.state.tipography}
          changeTipography={this.changeTipography}
          skillsList={this.state.skillsList}
          skillsNumber={this.state.skillsNumber}
          handleSelectSkills={this.handleSelectSkills}
          handleNumberOfSelects={this.handleNumberOfSelects}
          skillsSelected={this.state.skillsSelected}
          resetCard={this.resetCard}
          fileImageRef={this.fileInput}
          handleImage={this.handleImage}
          imageUrl={this.state.imageUrl}
          email={this.state.email}
          changeEmail={this.changeEmail} 
          phone={this.state.phone} 
          changePhone={this.changePhone}
          linkedin={this.state.linkedin} 
          changeLinkedin={this.changeLinkedin} 
          github={this.state.github}
          changeGithub={this.changeGithub}
      />

      </React.Fragment>
    );
  }
}

export default App;
