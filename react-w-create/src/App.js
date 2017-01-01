import React, { Component } from 'react';
import './App.css';
import Idea from './components/Idea';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: {}
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Outing Organizer</h1>
        <h2>Where do you want to go today?</h2>
        <ul className="list-of-ideas">
          <Idea />
        </ul>
      </div>
    );
  }
}

export default App;
