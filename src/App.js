import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: [
        ['A', 'B', 'C', 'D'],
        ['B', 'E', 'A', 'F'],
        ['C', 'I', 'G', 'H'],
        ['D', 'I', 'H', 'G']
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Advanced React/Redux Training</h1>
        </header>
        <main className="App-main">
          <Board rows={this.state.rows} />
        </main>
      </div>
    );
  }
}

export default App;
