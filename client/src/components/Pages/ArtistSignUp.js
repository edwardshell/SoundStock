import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";

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
            <Col size="md-3" />
            <Col size="md-6">
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
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Image Link</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Song Link</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Song"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Bio
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Investment info
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
                <br />

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <br />
            </Col>
            <Col size="md-3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistSignUp;
