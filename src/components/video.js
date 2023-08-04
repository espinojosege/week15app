import React from "react";
import AssignmentVid from "./../codingassignment15.mp4";

export default function Video() {
  return (
    <div className="row">
      <div className="col">
        <video controls src={AssignmentVid} width={`100%`}></video>
      </div>
    </div>
  );
}
