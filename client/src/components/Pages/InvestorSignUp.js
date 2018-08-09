import React, { Component } from "react"
import { Container, Row, Col } from "../Grid"
import Nav from "../Navbar/Nav"
import API from "../../utils/API";

export class InvestorSignUp extends Component {

    state = {
        email: "",
        password: "",
        name: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveInvestor({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
    };

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Row>
                        <Col size="3">
                            <form>
                                <input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    className="form-control m-2"
                                    type="text"
                                    placeholder="email" />
                                <input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    className="form-control m-2"
                                    type="text"
                                    placeholder="password" />
                                <input
                                    onChange={this.handleInputChange}
                                    name="confirm"
                                    className="form-control m-2"
                                    type="text"
                                    placeholder="confirm password" />
                                <input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    className="form-control m-2"
                                    type="text"
                                    placeholder="name" />

                                <button
                                    onClick={this.handleFormSubmit}
                                    type="submit"
                                    className="btn btn-info">
                                    Submit
                                  </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default InvestorSignUp