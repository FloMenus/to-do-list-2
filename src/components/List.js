import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task) => (
          <div>
            <h2>{task.description}</h2>
            <p>{task.status}</p>
            <button onClick={this.props.deleteTask}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
