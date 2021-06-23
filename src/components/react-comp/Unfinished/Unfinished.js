import React from "react";
import "./Unfinished.scss";

class Unfinished extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {
    this.props.removeNote(idx);
  }

  render() {
    return (
      <div id="unfinished-cont">
        {this.props.notes.map((note, idx) => {
          return (
            <div className="note-row" key={idx}>
                <span className="btn" onClick={() => this.handleClick(idx)}>
                  <i className="fa fa-check"></i>
                </span>
              {note}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Unfinished;
