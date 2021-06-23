import React from "react";
import "./Finished.scss";

class Finished extends React.Component {
  constructor(props) {
    super(props);
this.unfinishNote=this.unfinishNote.bind(this)
    this.deleteNote=this.deleteNote.bind(this)
  }

  unfinishNote(idx){
    this.props.unfinishNote(idx)
  }

  deleteNote(idx){
    this.props.deleteNote(idx)
  }

  render() {
    return (
      <div id="finished-cont">
        {this.props.removed.map((note, idx) => {
          return (
            <div className="note-row" key={idx}>
              <div>
              <span className="btn" onClick={()=>this.unfinishNote(idx)}>
                <i className="fa fa-undo"></i>
              </span>
              <span className="btn fa-trash-o" onClick={()=>this.deleteNote(idx)}>
                <i className="fa fa-trash-o"></i>
              </span>
              </div>
              <del>{note}</del>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Finished;
