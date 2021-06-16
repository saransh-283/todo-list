import React from "react";
import "./NewTodo.scss";

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (document.getElementById('add-input').value) {
      this.props.addNote(document.getElementById('add-input').value);
    }
  }

  render() {
    return (
      <div id="new-cont">
        <input
          type="text"
          placeholder="Add new item"
          id="add-input"
        />
        <button className="btn" onClick={this.handleClick}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default NewTodo;
