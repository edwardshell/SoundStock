import React from "react"
import { Container, Row, Col } from "./Grid"
import {Nav, Search, SignIn} from "./Navbar"
import {CardDiv} from "./Artist"
import API from "../utils/API";


const HomeContainer = () => 
<div>
    <Nav />
    <br></br>
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

