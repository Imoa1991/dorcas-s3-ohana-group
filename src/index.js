import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'));
  
ReactDOM.render(<App />, document.getElementById('root'));
