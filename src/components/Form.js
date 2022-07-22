import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleTaskDescriptionChange = (event) => {
    this.setState({
      task: event.target.value,
    });
    console.log(this.state.task);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <div>
        <form id="task-creation-form" onSubmit={this.handleSubmit}>
          <input type="submit" value="+"></input>
          <input
            type="text"
            placeholder="Nom"
            value={this.state.task}
            onChange={this.handleTaskDescriptionChange}
            required
          ></input>
        </form>
        <button value="All" onClick={this.props.newTasks}>
          All
        </button>
        <button value="To do" onClick={this.props.newTasks}>
          To Do
        </button>
        <button value="Doing" onClick={this.props.newTasks}>
          Doing
        </button>
        <button value="Done" onClick={this.props.newTasks}>
          Done
        </button>
      </div>
    );
  }
}

export default Form;
