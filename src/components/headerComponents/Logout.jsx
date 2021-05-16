import React from "react";
import profilePicture from "../../assets/images/profile-picture.png";
import "./Logout.css";
import { Link } from "react-router-dom";

export default (props) => (
  <div className="logout-section">
    <img
      src={profilePicture}
      alt="profile picture"
      className="profile-picture"
    />
    <Link to="/" className="logout-action">
      sair
    </Link>
  </div>
);
