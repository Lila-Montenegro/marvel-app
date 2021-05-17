import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import Card from "./Card";
import BigCard from "./BigCard";

import { movies as info } from "../utils/info";

import rightArrow from "../assets/images/arrow.png";

export default (props) => {
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState();

  const showPopup = (item) => {
    setPopupInfo(item);
    setPopup(true);
  };

  return (
    <div className="chars">
      {info.length > count + 1 && (
        <button className="right-scroll" onClick={() => setCount(count + 1)}>
          <img src={rightArrow} alt="button-to-scroll-right" />
        </button>
      )}
      {popup && <BigCard popupInfo={popupInfo} setPopup={setPopup} />}
      <div className="image-scroller">
        {info
          .map((item) => (
            <Card
              onClick={() => showPopup(item)}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
          .slice(count, count + 3)}
      </div>
    </div>
  );
};
