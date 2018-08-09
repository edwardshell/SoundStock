import React from "react"
import { Container, Row, Col } from "./Grid"
import {Nav, Search, SignIn} from "./Navbar"
import {CardDiv} from "./Artist"

const HomeContainer = () => 
<div>
    <Nav />
        <Container>
            <CardDiv />
        </Container>
    
</div>

export default HomeContainer;