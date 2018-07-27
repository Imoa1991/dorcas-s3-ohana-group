import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
constructor(props){
  super(props);
  this.tituloRellena='Rellena';
}
  render() {
    return (
      <Page tituloRellena={this.tituloRellena} />
      );
  }
}



export default App;
