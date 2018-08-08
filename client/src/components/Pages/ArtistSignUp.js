import React, { Component } from "react"
import { Container, Row, Col } from "../Grid"
import Nav from "../Navbar/Nav"

export class ArtistSignUp extends Component {

    state = {
        email: "",
        password: "",
        name: "",
        imageLink: "",
        songLink: "",
        bio: "",
        goal: ""
    }
    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "", name: "", imageLink: "", songLink: "", bio: "", goal: "" });
    };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Row>
                        <Col size="6">
                            <form>
                                <input className="form-control m-2" type="text" placeholder="email" />
                                <input className="form-control m-2" type="text" placeholder="password" />
                                <input className="form-control m-2" type="text" placeholder="confirm password" />
                                <input className="form-control m-2" type="text" placeholder="name" />
                                <input className="form-control m-2" type="text" placeholder="image link" />
                                <input className="form-control m-2" type="text" placeholder="song link" />
                                <textarea className="form-control m-2" type="text" placeholder="descrition of investment opportunity" />
                                <textarea className="form-control m-2" type="text" placeholder="bio" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ArtistSignUp