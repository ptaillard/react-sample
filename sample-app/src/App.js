import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DangerButton from './DangerButton.js'
import BoardSwitcher from './Boards.js'

class App extends Component {

  env = () => {
    console.log(process.env);
     JSON.stringify(process.env);
  };

  render() {
    var allEnv = JSON.stringify(process.env);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DangerButton />
        <p>all env: {allEnv}</p>
        <div>Environment: <b>{process.env.NODE_ENV}</b></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BoardSwitcher numBoards={6} />
      </div>
    );
  }
}

export default App;
