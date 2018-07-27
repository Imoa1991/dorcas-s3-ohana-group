import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page'

class App extends Component {
constructor(props){
  super(props);
    this.TitleD = {
      title: 'Diseña'
    };


}
  render() {
    return (
      <Page titledesing = {this.TitleD.title} />
      );
  }
}



export default App;
