import React, { Component } from "react";
import MarvelBox from "../components/LoginComponents/MarvelBox";
import LoginForm from "../components/LoginComponents/LoginForm";
import Delay from "../utils/Delay";

export default class Login extends Component {
  componentWillMount() {
    require("./Login.css");
  }

  componentWillUnmount() {
    require("../utils/null.css");
  }

  render() {
    return (
      <div className="login">
        <MarvelBox />
        <Delay waitBeforeShow={5000}>
          <LoginForm className="login-component" />
        </Delay>
      </div>
    );
  }
}
