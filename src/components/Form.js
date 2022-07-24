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
      <div className="flex w-9/12 items-center justify-between m-auto mt-16 p-6 bg-blue-700 text-white shadow-xl">
        <form className=" flex gap-3 1/2 text-white"id="task-creation-form" onSubmit={this.handleSubmit}>
          <input className="text-5x1 w-full font-bold text-base p-1" type="submit" value="+"></input>
          <input
            className="text-white p-1 bg-blue-900"
            type="text"
            placeholder="Nom"
            value={this.state.task}
            onChange={this.handleTaskDescriptionChange}
            required
            autocomplete="off"
          ></input>
        </form>
        <div className="flex w-1/2 justify-around">
        <button className="bg-blue-900 p-3 font-bold" value="All" onClick={this.props.newTasks}>
          All
        </button>
        <button className="bg-blue-900 p-3 font-bold" value="To do" onClick={this.props.newTasks}>
          To Do
        </button>
        <button className="bg-blue-900 p-3 font-bold" value="Doing" onClick={this.props.newTasks}>
          Doing
        </button>
        <button className="bg-blue-900 p-3 font-bold" value="Done" onClick={this.props.newTasks}>
          Done
        </button>
        </div>
      </div>
    );
  }
}

export default Form;
