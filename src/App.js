import React, { Component } from 'react';
import './App.css';
import logoCards from './imagenes/logo-awesome-profile-cards.svg';
import logoAdalab from './imagenes/logo-adalab-80px.png';
 class App extends Component {
  render() {
    return (
        <div className="page">
        <header>
          <div className="header__logo">
            <img className="header__logo--image" src={logoCards} alt=""/>
          </div>
        </header>
        <footer className="footer">
          <p className="footer__copyright">Awesome profile-cards @ 2018</p>
          <div className="footer__logo">
            <a title="Adalab" href="http://adalab.es/">
              <img className="footer__logo--image" src={logoAdalab} alt="Logo de Adalab en el pie de página"/>
            </a>
          </div>
        </footer>
        </div>
      );
  }
}



export default App;
