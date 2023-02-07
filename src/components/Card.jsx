import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card" onClick={props.onClick}>
    <img src={props.image} alt="character" />
    <div className="text">
      <span className="title">{props.title}</span>
      <p>{props.description}</p>
      <span className="check-details">ver detalhes</span>
    </div>
  </div>
);

export default Card;
