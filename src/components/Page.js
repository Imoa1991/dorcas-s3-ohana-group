import React from 'react';
import logoCards from '../imagenes/logo-awesome-profile-cards.svg';
import logoAdalab from '../imagenes/logo-adalab-80px.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Page extends React.Component {

  render() {

    return (
      <div className="page">
      <Header logoCards={logoCards} />
      <Main
            tituloRellena={this.props.tituloRellena}
            titleD={this.props.titleD}
            fontTypes={this.props.fontTypes}
            skillsList={this.props.skillsList}
            skillsNumber={this.props.skillsNumber}
            handleSelectSkills={this.props.handleSelectSkills}
            handleNumberOfSelects={this.props.handleNumberOfSelects}
            skillsSelected={this.props.skillsSelected}
      />
      <Footer logoAdalab={logoAdalab} copy={this.props.footerCopy} url={this.props.footerUrl}/>
      </div>
    );
  }
}

export default Page;
