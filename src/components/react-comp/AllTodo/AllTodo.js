import React from "react";
import "./AllTodo.scss";

class AllTodo extends React.Component {
  render() {
    return (
      <div id="all-cont">
        <h1>All</h1>
        <ul>
          {this.props.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllTodo;
