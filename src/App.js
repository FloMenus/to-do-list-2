import React, { Component } from 'react';
import Form from './components/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = () => {
    
  }

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;