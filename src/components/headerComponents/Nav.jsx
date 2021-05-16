import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default (props) => (
  <div className="nav-bar">
    <nav>
      <Link to="/chars" className="nav-item">
        Personagens
      </Link>
      <Link to="/movies" className="nav-item">
        Filmes
      </Link>
      <Link to="/hqs" className="nav-item">
        HQs
      </Link>
    </nav>
  </div>
);
