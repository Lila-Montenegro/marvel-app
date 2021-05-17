import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Header from "../components/Header";
import { Route, Switch } from "react-router";
import Characters from "../components/Characters";
import Movies from "../components/Movies";
import HQs from "../components/HQs";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/home/chars" component={Characters} />
            <Route path="/home/movies" component={Movies} />
            <Route path="/home/hqs" component={HQs} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
