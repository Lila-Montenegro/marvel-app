import React from "react";
import profilePicture from "../../assets/images/profile-picture.png";
import "./Logout.css";
import { Link } from "react-router-dom";

const Logout = () => (
  <div className="logout-section">
    <img
      src={profilePicture}
      alt="this is the profile"
      className="profile-picture"
    />
    <Link to="/" className="logout-action">
      sair
    </Link>
  </div>
);

export default Logout;
