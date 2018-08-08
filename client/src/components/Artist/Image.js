import React from "react";

const Image = () => (
  <div>
    <img src={this.props.img} className="rounded float-left" alt={this.props.name} />
  </div>
);

export default Image;