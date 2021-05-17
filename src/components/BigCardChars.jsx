import React, { setState } from "react";
import "./BigCard.css";
import closeButton from "../assets/images/closeButton.png";
import star from "../assets/images/star.png";

export default ({ popupInfo, setPopup }) => {
  return (
    <div className="background-overlay">
      <div className="big-card">
        <img src={popupInfo.image} alt="" />
        <div className="information">
          <h1 className="info-title">{popupInfo.title}</h1>
          <span className="appearances">Aparições</span>
          <ul>
            {popupInfo.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <span className="fans-avaliation">Avaliações dos Fãs</span>
          <div>
            {popupInfo.stars.map((item) => (
              <img src={star} alt="" className="stars" />
            ))}
          </div>
        </div>
        <button className="close-button" onClick={() => setPopup(false)}>
          <img src={closeButton} alt="" />
        </button>
      </div>
    </div>
  );
};
