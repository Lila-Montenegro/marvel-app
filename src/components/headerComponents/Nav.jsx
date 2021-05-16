import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default (props) => (
  <div className="nav-bar">
    <nav>
      <Link to="/home/chars" className="nav-item">
        Personagens
      </Link>
      <Link to="/home/movies" className="nav-item">
        Filmes
      </Link>
      <Link to="/home/hqs" className="nav-item">
        HQs
      </Link>
    </nav>
  </div>
);
