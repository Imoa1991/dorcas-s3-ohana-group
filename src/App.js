import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      copyright:'Awesome profile-cards @ 2018',
      adalab:'http://adalab.es/',
      titleD: 'Diseña',
      tituloRellena: 'Rellena'
    };
  }
  // this.state = this.state.bind(this)

  render() {
    return (
      <React.Fragment>
      <Page tituloRellena={this.state.tituloRellena} titleD={this.state.titleD} footerCopy={this.state.copyright} footerUrl={this.state.adalab}/>
      </React.Fragment>
    );
  }
}

export default App;
