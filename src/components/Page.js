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
            resetCard={this.props.resetCard}
            fileImageRef={this.props.fileImageRef}
            handleImage={this.props.handleImage}
            imageUrl={this.props.imageUrl}
            email={this.props.email}
            changeEmail={this.props.changeEmail}
            phone={this.props.phone}
            changePhone={this.props.changePhone}
            linkedin={this.props.linkedin}
            changeLinkedin={this.props.changeLinkedin}
            github={this.props.github}
            changeGithub={this.props.changeGithub}
            generateJsonToShare={this.props.generateJsonToShare}
            generateCardToShare={this.props.generateCardToShare}
            design_colapsed={this.props.design_colapsed}
            fill_colapsed={this.props.fill_colapsed}
            share_colapsed={this.props.share_colapsed}
            clickDesign={this.props.clickDesign}
            clickFill={this.props.clickFill}
            clickShare={this.props.clickShare}
      />
      <Footer />

      </div>
    );
  }
}

export default Page;
