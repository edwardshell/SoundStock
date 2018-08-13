import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import "./investor.css";
import API from "../../utils/API";


export class InvestorSignUp extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };
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
        .then(res => {
            console.log(res) 
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="flexContainer flexCenter itemCenter fullHeight centerImage">
        <br />
        <Container fluid>
          <Row>
            <Col size="8">
              <form className="investor-form">
                <p className="h4 text-center mb-4">Sign up</p>

                <input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  className="form-control m-2"
                  type="text"
                  placeholder="Email" />
                               
                <input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  className="form-control m-2"
                  type="password"
                  placeholder="Password" />
                               
                <input
                  onChange={this.handleInputChange}
                  name="confirm"
                  className="form-control m-2"
                  type="password"
                  placeholder="Confirm password" />
                
                <input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  className="form-control m-2"
                  type="text"
                  placeholder="Name" />
                <br />
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn btn-success">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default InvestorSignUp;
