import React, { Component } from 'react';
import Idea from './components/Idea';
import CreateIdeaForm from './components/CreateIdeaForm';

class App extends Component {
  constructor() {
    super();

    this.addIdea = this.addIdea.bind(this);

    this.state = {
      ideas: {}
    };
  }

  addIdea(idea) {
    const ideas = {...this.state.ideas};

    const timestamp = Date.now();

    ideas[`idea-${timestamp}`] = idea;

    this.setState({ideas});
  }

  render() {
    return (
      <div className="App">
        <h1>Outing Organizer</h1>
        <h2>Where do you want to go today?</h2>
        <ul className="list-of-ideas">
          <Idea />
        </ul>
        <CreateIdeaForm addIdea={this.addIdea}/>
      </div>
    );
  }
}

export default App;
