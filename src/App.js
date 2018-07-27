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
}
  render() {
    return (
      <Page footerCopy={this.footer.copyright} footerUrl={this.footer.adalab}/>
      );
  }
}



export default App;
