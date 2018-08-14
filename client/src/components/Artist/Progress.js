import React from "react";

const Progress = props => (
  <div>
    <h5> {props.number}% Invested</h5>
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: props.number + "%" }}
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </div>
);

export default Progress;
