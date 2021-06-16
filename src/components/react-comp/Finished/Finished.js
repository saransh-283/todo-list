import React from "react";
import "./Finished.scss";

class Finished extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="finished-cont">
        {this.props.removed.map((note, idx) => (
          <div key={idx} className="note">
            <span className="undo-btns">
              <button className="btn" onClick={(e) => this.props.unfinishNote(idx)}>
                <i className="fa fa-undo" aria-hidden="true"></i>
              </button>
              <button id="delete-btn" className="btn" onClick={(e) => this.props.deleteNote(idx)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </span>
              <del>{note}</del>
          </div>
        ))}
      </div>
    );
  }
}

export default Finished;
