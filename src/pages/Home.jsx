import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Header from "../components/Header";

export default class Home extends Component {
  componentWillMount() {
    require("./Home.css");
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
        </div>
      </HashRouter>
    );
  }
}
