import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
import "./artist.css";


export class ArtistSignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };
  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
      name: "",
      imageLink: "",
      songLink: "",
      bio: "",
      goal: ""
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>

            <Col size="md-10">
            <div className="form-artist">
            <p className="h4 text-center mb-4">Sign up</p>

              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
            <Col size="6">
              <br />
                <form>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="imageLink">Image Link</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Image"
                    />
                  </div>
                  <div className="form-group">
                    <label for="songLink">Song Link</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Song"
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>

                <button type="submit" className="btn btn-info">
                  Submit
                </button>
               
              </form>
              </div>

              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistSignUp;
