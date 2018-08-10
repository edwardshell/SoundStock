import React, { Component } from "react";
import API from "../../utils/API";

class MiniCard extends Component {

  state = {
    artists: [],
    email: "",
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    API.getArtists()
      .then(res =>
        this.setState({
          artists: res.data,
          email: "",
          name: "",
          imageLink: "",
          songLink: "",
          bio: "",
          goal: ""
        }))
      .catch(err => console.log(err));
  };

  render() {
    return (


      <div className="card">
        <div
          className="card-header"
          onLoad={() =>  this.loadArtists()} >
        </div>
        <div className="card-body">
        </div>
        <div className="card-footer">
        </div>
      </div>
    )
  }

}

export default MiniCard;