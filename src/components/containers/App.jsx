import React, { Component } from 'react';
// import '../sass/main.sass';
import Buttons from './Buttons.jsx';
import Settings from './Settings.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <Settings />
      </div>
    );
  }
}

export default App;
