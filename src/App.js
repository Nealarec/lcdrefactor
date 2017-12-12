import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LCD Refactor - By Nelson Alberto</h1>
          <a href='https://github.com/chiruza/lcdrefactor'>Codigo en github</a>
        </header>
        <div className="App-intro">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
