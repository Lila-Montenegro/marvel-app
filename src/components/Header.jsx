import React from "react";
import "./Header.css";
import Logo from "./headerComponents/Logo";
import Nav from "./headerComponents/Nav";
import Logout from "./headerComponents/Logout";

const Header = (props) => (
  <div className="header">
    <Logo />
    <Nav />
    <Logout />
  </div>
);

export default Header;
