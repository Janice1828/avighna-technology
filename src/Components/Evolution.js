import React from "react";
import Webdesign from "../images/Floating Element (2).png";
import EvolutionBackground from "../images/charlesdeluvio-Lks7vei-eAg-unsplash 1.png";
import Softwaredevelopment from "../images/Floating Element (1).png";
import Webdevelopment from "../images/Floating Element.png";
import Arrowicon from "../images/tabler-icon-arrow-up-right.png";

const Evolution = ({ heading, content, btnOne, btnTwo, img }) => {
  return (
    <div className="evolution">
      <div className="evolution-background-content">
        <h1 className="text-center">{heading}</h1>
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
        <div className="evolution-bg-img">
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
