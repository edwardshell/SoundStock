import React, { Component } from "react";
import { Container } from "./Grid";
import { Nav } from "./Navbar";
import { CardDiv } from "./Artist";
import { Carousel } from "./Carousel";
import API from "../utils/API";
import { Footer } from "./Footer"
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
    goal: "",
    investP: 0
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

        <Carousel  />


        <Container>
          {this.state.artists.length ? (
            <div>
              {this.state.artists.map(artist => (
                <CardDiv
                  key={artist._id}
                  name={artist.name}
                  goal={artist.goal}
                  src={artist.songLink}
                  img={artist.imageLink}
                  alt={artist.name}
                  artid={artist._id}
                  investP={artist.investP}
                  loadArtist={this.loadArtist}
                />
              ))}
            </div>
          ) : (
            <h3>No results to display</h3>
          )}
        </Container>
        <br />
        <Footer />
      </div>
    );
  }
}
export default HomeContainer;
