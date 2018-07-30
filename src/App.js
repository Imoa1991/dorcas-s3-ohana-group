import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
constructor(props){
  super(props);
  this.tituloRellena='Rellena';
  this.TitleD = {
      title: 'Diseña'
    };
}
  render() {
    return (
      <Page tituloRellena={this.tituloRellena} />
      <Page titledesing = {this.TitleD.title} />
      );
  }
}



export default App;
