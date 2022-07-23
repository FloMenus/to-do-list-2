import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTasks: [],
    };
  }

  addTask = (description) => {
    const task = {
      description: description,
      status: "To do",
      // id: new Date().getTime(),
    };

    const clonedTasksAdd = [...this.state.tasks, task];
    this.setState({
      tasks: clonedTasksAdd,
      newTasks: clonedTasksAdd,
    });
    console.log(this.state.tasks);
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
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks[index].editing = true;
    this.setState({
      tasks: clonedTasks,
    });
  };
  handleDescriptionChange = (e, task) => {
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks[index].description = e.target.value;
    this.setState({
      tasks: clonedTasks,
      newTasks: clonedTasks,
    });
  };
  handleStatusChange = (e, task) => {
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks[index].status = e.target.value;
    this.setState({
      tasks: clonedTasks,
      newTasks: clonedTasks,
    });
  };
  validateTask = (task) => {
    const clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(task);
    clonedTasks[index].editing = false;
    this.setState({
      tasks: clonedTasks,
      newTasks: clonedTasks,
    });
  };

  filteredTask = (e) => {
    this.setState(
      {
        tasks: this.state.newTasks,
      },
      () => {
        let clonedTask = [...this.state.tasks];
        let filteredTask = clonedTask.filter((task) => {
          return task.status === e.target.value;
        });
        e.target.value !== "All"
          ? this.setState({tasks: filteredTask})
          : this.setState({tasks: clonedTask});
      }
    );
  };

  render() {
    return (
      <>
        <Form
          addTask={this.addTask}
          newTasks={(e) => {
            this.filteredTask(e);
          }}
        />
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
              editing={task.editing}
              editTask={() => {
                this.editTask(task);
              }}
              descriptionChange={(e) => {
                this.handleDescriptionChange(e, task);
              }}
              statusChange={(e) => {
                this.handleStatusChange(e, task);
              }}
              validate={task.validate}
              validateTask={() => {
                this.validateTask(task);
              }}
            />
          );
        })}
      </>
    );
  }
}

export default App;
