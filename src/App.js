import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

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
      tasks: clonedTasksAdd,
    });
  };
  deleteTask = (task) => {
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks.splice(index, 1);
    this.setState({
      tasks: clonedTasks,
    });
  };

  render() {
    return (
      <>
        <Form addTask={this.addTask} />
        {this.state.tasks.map((task) => {
          return (
            <List
              tasks={this.state.tasks}
              description={task.description}
              status={task.status}
              deleteTask={() => {
                this.deleteTask(task);
              }}
            />
          );
        })}
      </>
    );
  }
}

export default App;
