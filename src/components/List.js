import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <>
        {!this.props.editing ? (
          <div>
            <h2>{this.props.description}</h2>
            <p>{this.props.status}</p>
            <button onClick={this.props.deleteTask}>X</button>
            <button onClick={this.props.editTask}>Modifier</button>
          </div>
        ) : (
          <div>
            <input type="text" onChange={this.props.descriptionChange}></input>

            <select name="status" onChange={this.props.statusChange}>
              <option value={this.props.status}>Select</option>
              <option value="To do">A faire</option>
              <option value="Doing">En cours</option>
              <option value="Done">Faite</option>
            </select>

            <button onClick={this.props.validateTask}>Valider</button>
          </div>
        )}
      </>
    );
  }
}

export default List;
