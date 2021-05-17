import React, { setState } from "react";
import "./BigCard.css";
import closeButton from "../assets/images/closeButton.png";
import star from "../assets/images/star.png";
import logoDisney from "../assets/images/logoDisney.png";

export default ({ popupInfo, setPopup }) => {
  return (
    <div className="background-overlay">
      <div className="big-card">
        <img src={popupInfo.image} alt="" />
        <div className="information">
          <h1 className="info-title">{popupInfo.title}</h1>
          <p className="description">{popupInfo.description}</p>
          <h2 className="streaming-call">Disponível em streaming</h2>
          <div className="image-background">
            <img src={logoDisney} alt="" className="logo-disney" />
          </div>
          <h3 className="fans-avaliation">Crítica</h3>
          <div>
            {popupInfo.stars.map((item) => (
              <img src={star} alt="" className="stars" />
            ))}
          </div>
        </div>
        <button className="close-button-movies" onClick={() => setPopup(false)}>
          <img src={closeButton} alt="" />
        </button>
      </div>
    </div>
  );
};
