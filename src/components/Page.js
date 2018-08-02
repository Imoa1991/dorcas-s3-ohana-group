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
      <Main changeName={this.props.changeName} name={this.props.name} tituloRellena={this.props.tituloRellena} titleD={this.props.titleD} fontTypes={this.props.fontTypes} skills={this.props.skills}/>
      <Footer logoAdalab={logoAdalab} copy={this.props.footerCopy} url={this.props.footerUrl}/>
      </div>
    );
  }
}

export default Page;
