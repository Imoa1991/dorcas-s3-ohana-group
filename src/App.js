import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
  constructor(props){
    super(props);
    this.footer = {
      copyright:'Awesome profile-cards @ 2018',
      adalab:'http://adalab.es/'
    }
    this.tituloRellena='Rellena';
    this.TitleD = {
      title: 'Diseña'
    };
  }
  render() {
    return (
      <React.Fragment>
        <Page tituloRellena={this.tituloRellena} titledesing = {this.TitleD.title} footerCopy={this.footer.copyright} footerUrl={this.footer.adalab}/>
      </React.Fragment>
    );
  }
}

export default App;
