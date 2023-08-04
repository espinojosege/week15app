import React from "react";

export default function Navbar(props) {
  return (
    <div className="row">
      <div className="col">
        <button
          className="btn btn-outline-success me-2"
          type="button"
          onClick={props.codingAssignment}
        >
          Week 15
        </button>
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={props.assignmentVideo}
        >
          Week 15 Video
        </button>
      </div>
    </div>
  );
}
