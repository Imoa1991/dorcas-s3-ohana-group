import React from 'react';
import logoCards from '../imagenes/logo-awesome-profile-cards.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Page extends React.Component {

  render() {

    return (
      <div className="page">
      <Header logoCards={logoCards} />
      <Main
            changeName={this.props.changeName}
            name={this.props.name}
            changeJob={this.props.changeJob}
            job={this.props.job}
            palette={this.props.palette}
            changePalette={this.props.changePalette}
            tipography={this.props.tipography}
            changeTipography={this.props.changeTipography}
            skillsList={this.props.skillsList}
            skillsNumber={this.props.skillsNumber}
            handleSelectSkills={this.props.handleSelectSkills}
            handleNumberOfSelects={this.props.handleNumberOfSelects}
            skillsSelected={this.props.skillsSelected}
            fileImageRef={this.props.fileImageRef}  
            handleImage={this.props.handleImage} 
            imageUrl={this.props.imageUrl}
      />
      <Footer />
      </div>
    );
  }
}

export default Page;
