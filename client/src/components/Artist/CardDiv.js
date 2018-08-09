import React from "react";
import Progress from "./Progress";
import Music from "./Music";
import Image from "./Image";

const styles = {
  padding: {
    paddingTop: 40,
    marginLeft: 10
  }
};

export const CardDiv = () => (
  <div className="container">
    <div className="card">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <Image />
          </div>
          <div className="col-md-6">
          <p>
            summary and bio that is recieved from sign up form will go here
          </p>
          </div>
          <div className="col-md-4">
            <Music />
            <div className="row">
              <div className="col-md-10" style={styles.padding}>
                <Progress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
