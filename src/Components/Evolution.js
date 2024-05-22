import React, { useEffect, useState } from "react";
import Webdesign from "../images/Floating Element (2).png";
import EvolutionBackground from "../images/charlesdeluvio-Lks7vei-eAg-unsplash 1.png";
import Softwaredevelopment from "../images/Floating Element (1).png";
import Webdevelopment from "../images/Floating Element.png";
import Arrowicon from "../images/tabler-icon-arrow-up-right.png";

const Evolution = ({ heading, content, btnOne, btnTwo, img }) => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const titleArr = heading.split(" ");
    setTitle(titleArr);
  }, []);
  return (
    <div className="evolution">
      <div className="evolution-background-content">
        <h1 className="text-center">
          {title.map((item, id) => (
            <span
              key={id}
              className={id === 1 || id === 2 ? "evolution-text-blue" : " "}
            >
              {item}&nbsp;
            </span>
          ))}
        </h1>
        <p className="text-center evolution-text-content">{content}</p>
        <div className="d-flex evolution-btns">
          <a href="#" className="learn-more-btn">
            {btnOne}
          </a>
          <a href="#" className="see-our-work-btn">
            <span>{btnTwo}</span> <img src={Arrowicon} alt="" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="evolution-bg-img d-flex justify-content-center">
          <img src={Webdesign} alt="" id="web-design" />
          <img src={Webdevelopment} alt="" id="web-development" />
          <img src={Softwaredevelopment} alt="" id="software-development" />
          <img src={EvolutionBackground} alt="" id="background-img" />
        </div>
      </div>
    </div>
  );
};

export default Evolution;
