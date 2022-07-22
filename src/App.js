import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      editing: false,
    };
  }

  addTask = (description) => {
    const task = { description: description, status: "To do", id: new Date().getTime() };

    const clonedTasksAdd = [...this.state.tasks, task];
    this.setState({
      tasks: clonedTasksAdd,
    });
    console.log(this.state.tasks)
  };
  deleteTask = (task) => {
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks.splice(index, 1);
    this.setState({
      tasks: clonedTasks,
    });
  };
  editTask = (task) => {
    this.setState ({
      editing: true,
    })

  }


  render() {
    return (
      <>
        <Form addTask={this.addTask} />
        {this.state.tasks.map((task) => {
          return (
            <List
              id={task.id}
              tasks={this.state.tasks}
              description={task.description}
              status={task.status}
              deleteTask={() => {
                this.deleteTask(task);
              }}
              editTask={() => {
                this.editTask(task);
              }}

            />
          );
        })}
      </>
    );
  }
}

export default App;
