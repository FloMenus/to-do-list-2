import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List"

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask = (description) => {
    const task = { description: description, status: "To do" };

    const clonedTasks = [...this.state.tasks, task];
    this.state.tasks = clonedTasks;
  };

  render() {
    return (
      <>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks}/>
      </>
    );
  }
}

export default App;
