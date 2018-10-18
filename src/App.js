import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EmojiSelect from "./pages/EmojiSelect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>How you doin'?</p>
          <EmojiSelect/>
      </div>
    );
  }
}

export default App;
