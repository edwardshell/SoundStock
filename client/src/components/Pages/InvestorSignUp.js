import React, { Component } from "react"
import { Container, Row, Col } from "../Grid"
import Nav from "../Navbar/Nav"

export class InvestorSignUp extends Component {

    state = {
        email: "",
        password: "",
        name: "",
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
        this.setState({ email: "", password: "", name: "",});
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
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default InvestorSignUp