import React, { Component } from "react";
import { Container, Row, Col } from "./Grid";
import { Nav, Search, SignIn } from "./Navbar";
import { CardDiv } from "./Artist";
import API from "../utils/API";

// Import db controllers page and render Carddiv for each person in db collection with artists
// in the form of a function that will be called in the onclick for the submit button
// summary div in card has props children to use to give it the mapped out data

class HomeContainer extends Component {
  state = {
    artists: [],
    name: "",
    imageLink: "",
    songLink: "",
    bio: "",
    goal: ""
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    API.getArtists()
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
        <div className="flexContainer flexCenter itemCenter fullHeight centerImage">
        <CardDiv />

        </div>
        </Container>

        <div>
            <footer className="flexContainer flexCenter blueBackground whiteText height50">&copy; Sound-Stock</footer>
        </div>        
</div>

export default HomeContainer;