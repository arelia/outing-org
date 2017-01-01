import React, { Component } from 'react';
import Idea from './components/Idea';
import CreateIdeaForm from './components/CreateIdeaForm';

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
        <AddIdeaForm />
      </div>
    );
  }
}

export default App;
