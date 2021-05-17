import React from "react";
import "./BigCard.css";
import closeButton from "../assets/images/closeButton.png";

export default ({ popupInfo, setPopup }) => {
  return (
    <div className="background-overlay">
      <div className="big-card">
        <img src={popupInfo.image} alt="" />
        <div className="information">
          <h1>{popupInfo.title}</h1>
          <span>Aparições</span>
          <ul>
            {console.log(popupInfo.list)}
            {popupInfo.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <span>Avaliação dos Fãs</span>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <button className="close-button" onClick={() => setPopup(false)}>
          <img src={closeButton} alt="" />
        </button>
      </div>
    </div>
  );
};
