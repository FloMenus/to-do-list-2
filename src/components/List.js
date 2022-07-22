import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
            <h2>{this.props.description}</h2>
            <p>{this.props.status}</p>
            <button onClick={this.props.deleteTask}>X</button>
      </div>
    );
  }
}

export default List;
