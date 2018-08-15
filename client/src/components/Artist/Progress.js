import React from "react";
const styles = {
  invested: {
    marginBottom: "0px"
  }
}

const Progress = props => (
  <div>
    <p style={styles.invested}> {props.number}% Invested</p>
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
