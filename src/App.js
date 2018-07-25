import React, { Component } from 'react';
import './styles/main.css';
import logoCards from './imagenes/logo-awesome-profile-cards.svg';
import logoAdalab from './imagenes/logo-adalab-80px.png';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <div className="page">
          <Header logoCards={logoCards} />
          <Main />
          <Footer logoAdalab={logoAdalab} />
        </div>
      );
  }
}



export default App;
