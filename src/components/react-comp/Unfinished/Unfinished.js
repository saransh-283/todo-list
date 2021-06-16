import React from "react";
import "./Unfinished.scss";

class Unfinished extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="unfinished-cont">
        {this.props.notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <button
                className="add-btn btn"
                id={idx}
                onClick={(e) =>
                  this.props.removeNote(idx)
                }
              >
                <i className="fa fa-check" aria-hidden="true"></i>
              </button>
              {note}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Unfinished;
