import React from "react";
import "./Login.css";
import MarvelBox from "../components/LoginComponents/MarvelBox";
import LoginForm from "../components/LoginComponents/LoginForm";
import Delay from "../utils/Delay";

export default (props) => (
  <div className="login">
    <MarvelBox />
    <Delay waitBeforeShow={5000}>
      <LoginForm className="login-component" />
    </Delay>
  </div>
);
