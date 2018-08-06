import React, { Component } from 'react';
import './styles/main.css';
import Page from './components/Page';
import Home from './components/Home';
import { Route, Switch, Link } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <React.Fragment>
         <Switch>
           <Route exact path='/' component={ Home } />
           <Route path='/Page' component={ Page } />
         </Switch>

      </React.Fragment>
    );
  }
}

export default App;
