import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <>
        {!this.props.editing ? (
          <div className="flex justify-between m-auto w-3/5 bg-blue-500 mt-8 p-5 text-black font-bold">
            <p>{this.props.status}</p>
            <h2 text-3xl text-center mt-10>{this.props.description}</h2>
            <div className="flex gap-3">
            <button onClick={this.props.editTask}>Modifier</button>
            <button onClick={this.props.deleteTask}>X</button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between m-auto w-3/5 bg-blue-500 mt-8 p-5 text-black font-bold">
           

            <select className= "bg-blue-300"name="status" onChange={this.props.statusChange}>
              <option value="To do">A faire</option>
              <option value="Doing">En cours</option>
              <option value="Done">Faite</option>
            </select>
            <input className= "bg-blue-300 p-1" type="text" onChange={this.props.descriptionChange} autocomplete="off"></input>

            <button className="bg-blue-300 p-1 pl-3 pr-3"onClick={this.props.validateTask}>Valider</button>
          </div>
        )}
      </>
    );
  }
}

export default List;
