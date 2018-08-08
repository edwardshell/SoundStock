import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./components/HomeContainer"
import {ArtistSignUp} from "./components/Pages/ArtistSignUp"
import {InvestorSignUp} from "./components/Pages/InvestorSignUp"


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/artistSignUp" component={ArtistSignUp} />
          <Route exact path="/investorSignUp" component={InvestorSignUp} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
