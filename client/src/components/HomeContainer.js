import React from "react";
import { Container, Row, Col } from "./Grid";
import { Nav, Search, SignIn } from "./Navbar";
import { CardDiv } from "./Artist";
import API from "../utils/API";

const HomeContainer = () => (
  <div>
    <Nav />
    <div className="flexContainer flexCenter itemCenter fullHeight centerImage">
      <br />
      <div>
        <footer className="flexContainer flexCenter blueBackground whiteText height50">
          &copy; Sound-Stock
        </footer>
      </div>
      <Container>
        <CardDiv />
      </Container>
    </div>
  </div>
);
export default HomeContainer;
