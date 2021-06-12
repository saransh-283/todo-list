import React from "react";
import "./NewTodo.scss";

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      current: e.target.value,
    });
  }

  handleClick(){
    this.setState({
        current:'',
    });
    this.props.addNote(this.state.current)
  }

  render() {
    return (
      <div id="new-cont">
        <h1>New</h1>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Add new item"
          value={this.state.current}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default NewTodo;
