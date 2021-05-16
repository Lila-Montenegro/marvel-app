import React, { Component } from "react";
import Header from "../components/Header";

export default class Home extends Component {
  componentWillMount() {
    require("./Home.css");
  }

  render() {
    return <Header />;
  }
}
