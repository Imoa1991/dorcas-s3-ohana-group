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
        <Main tituloRellena={this.props.tituloRellena} />
        <Footer logoAdalab={logoAdalab} />
      </div>
      );
  }
}

export default Page;
