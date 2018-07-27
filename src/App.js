import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
constructor(props){
  super(props);
    this.fontTypes = [ 'Ubuntu', 'Comic Sans', 'Montserrat' ];

}
  render() {
    return (
      <Page fontTypes={this.fontTypes} />
      );
  }
}



export default App;
