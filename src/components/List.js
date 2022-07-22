import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
            <h2>{this.props.description}</h2>
            <p>{this.props.status}</p>
            <button onClick={this.props.deleteTask}>X</button>
            <button onClick={this.props.modifyTask}>Modifier</button>
      </div>
    );
  }
}

export default List;
