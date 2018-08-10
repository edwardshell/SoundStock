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
            <CardDiv />
        </Container>
    
</div>

export default HomeContainer;