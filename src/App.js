import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page';
import Home from './components/Home';
import Result from './components/Result';
import OhanaSea from './imagenes/ohana-sea.jpg';

import { Route, Switch, Link } from 'react-router-dom';

const fr = new FileReader();
let finalCardToShareObject = {};

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
      github:'',
      imageUrl: OhanaSea,
      image: '',
      skillsList: [],
      skillsNumber: 1,
      skillsSelected: [],
      cardData: {
        "palette": 1,
        "typography": 1,
        "name" : "Dorcas Muthoni",
        "job": "Developer",
        "phone": "+34 666666666",
        "email": "dorcas@ohana.com",
        "linkedin": "dorcas-ohana",
        "github": "dorcas-ohana",
        "photo": "data:image/png;base64,2342ba...",
        "skills": ["HTML", "Sass", "JavaScript"]
      },
      finalCardToShare: {},
      design_colapsed: "collapsible--visible",
      fill_colapsed: "",
      share_colapsed: ""
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
    this.generateCardToShare = this.generateCardToShare.bind(this);
    this.saveToStateFinalCardToShare = this.saveToStateFinalCardToShare.bind(this);
    this.clickDesign = this.clickDesign.bind(this);
    this.clickFill = this.clickFill.bind(this);
    this.clickShare = this.clickShare.bind(this);
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
    this.setState({
      imageUrl: `url("${fr.result}")`,
      image: fr.result
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
    alert('reset');
    this.setState({
      name: "Nombre y Apellido",
      job: "Front End Developer",
      palette:1,
      tipography: 1,
      skillsNumber: 1,
      skillsSelected: [],
      imageUrl: '',
      image: '',
      email:'',
      phone:'',
      linkedin:'',
      github:'',
    })
  }

  generateJsonToShare = () => {
    this.setState({
      cardData: {
        "palette": this.state.palette,
        "typography": this.state.tipography,
        "name" : this.state.name,
        "job": this.state.job,
        "phone": this.state.phone,
        "email": this.state.email,
        "linkedin": this.state.linkedin,
        "github": this.state.github,
        "photo": this.state.image,
        "skills": this.state.skillsSelected
      }
    })
  }

  generateCardToShare() {
    console.log(JSON.stringify(this.state.cardData));
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(this.state.cardData),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      finalCardToShareObject = result;
      document.querySelector('.saveRetrievedCardData').click();
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  saveToStateFinalCardToShare() {
    this.setState({
      finalCardToShare: finalCardToShareObject
    })
  }

  showURL(result) {
    console.log(result.cardURL);
    const body = document.querySelector('body');
    if(result.success){
      body.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    }else{
      body.innerHTML = 'ERROR:' + result.error;
    }
  }

  clickDesign(e) {
    if (this.state.design_colapsed == 'collapsible--visible') {
      this.setState({
        design_colapsed: ""
      })
    } else {
      this.setState({
        design_colapsed: "collapsible--visible",
        fill_colapsed: "",
        share_colapsed: ""
      })
    }
  }

  clickFill(e) {
    if (this.state.fill_colapsed == 'collapsible--visible') {
      this.setState({
        fill_colapsed: ""
      })
    } else {
      this.setState({
        fill_colapsed: "collapsible--visible",
        design_colapsed: "",
        share_colapsed: ""
      })
    }
  }

  clickShare(e) {
    if (this.state.share_colapsed == 'collapsible--visible') {
      this.setState({
        share_colapsed: ""
      })
    } else {
      this.setState({
        share_colapsed: "collapsible--visible",
        fill_colapsed: "",
        design_colapsed: ""
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <button className="saveRetrievedCardData" onClick={this.saveToStateFinalCardToShare}>Do not click</button>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/Page' render={ () =>
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
              generateJsonToShare={this.generateJsonToShare}
              generateCardToShare={this.generateCardToShare}
              design_colapsed={this.state.design_colapsed}
              fill_colapsed={this.state.fill_colapsed}
              share_colapsed={this.state.share_colapsed}
              clickDesign={this.clickDesign}
              clickFill={this.clickFill}
              clickShare={this.clickShare}
            />
          }
        />
        <Route path='/result'  render={ () =>
          <Result
            finalCardToShare={this.state.finalCardToShare}
          />
        }
      />
    </Switch>

  </React.Fragment>
);
}

}

export default App;
