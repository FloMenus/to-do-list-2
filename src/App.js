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

    const clonedTasksAdd = [...this.state.tasks, task];
    this.setState({
      tasks: clonedTasksAdd
    })
  };
  deleteTask = (index) => {
    this.setState ({
      tasks: [...this.state.tasks].splice(index, 1)
    })
  }

  render() {
    return (
      <>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </>
    );
  }
}

export default App;
