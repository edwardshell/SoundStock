import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
import "./artist.css";

export class ArtistSignUp extends Component {
  state = {
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: "",
    investP: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveArtist({
      name: this.state.name,
      imageLink: this.state.imageLink,
      songLink: this.state.songLink,
      bio: this.state.bio,
      goal: this.state.goal,
      investP: 0
    })
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="flexContainer flexCenter itemCenter fullHeight centerImage">
        <br />
        <Container fluid>
          <Row>
            <Col size="md-3" />
            <Col size="md-6">
              <h5 className="text-center"><strong>Add Song for Investors</strong></h5>
              <form>
                <div className="form-group">
                  <input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.imageLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Image"
                    name="imageLink"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.songLink}
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Song"
                    name="songLink"
                  />
                </div>
                {/* <div className="form-group">
                  <textarea
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Tell us about yourself"
                    name="bio"
                    cols="50"
                    rows="5"
                  />
                </div> */}
                <div className="form-group">
                  <textarea
                    value={this.state.goal}
                    onChange={this.handleInputChange}
                    className="form-control"
                    name="goal"
                    cols="50"
                    rows="5"
                    placeholder="Tell us about the you and your investment opportunity?"
                  />
                </div>
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn btn-success"
                >
                  Submit
                </button>
              </form>
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>
        </div>
              <div>
                <footer className="flexContainer flexCenter blueBackground whiteText height50">
                  &copy; Sound-Stock
                </footer>
              </div>
      </div>
    );
  }
}

export default ArtistSignUp;
