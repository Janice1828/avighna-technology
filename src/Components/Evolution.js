import React from "react";
import Webdesign from "../images/Floating Element (2).png";
import EvolutionBackground from "../images/charlesdeluvio-Lks7vei-eAg-unsplash 1.png";
import Softwaredevelopment from "../images/Floating Element (1).png";
import Webdevelopment from "../images/Floating Element.png";
import Arrowicon from "../images/tabler-icon-arrow-up-right.png";

const Evolution = () => {
  return (
    <div className="evolution">
      <div className="evolution-background-content">
        <h1 className="text-center">
          Your IT Evolution <br />
          Starts Here
        </h1>
        <p className="text-center evolution-text-content">
          Lorem Ipsum estibulum blandit libero at mauris condi mentum males
          <br /> uada scelerisque in mauris ut mada.
        </p>
        <div className="d-flex evolution-btns">
          <a href="#" className="learn-more-btn">
            Learn More
          </a>
          <a href="#" className="see-our-work-btn">
            <span>See Our Work</span> <img src={Arrowicon} alt="" />
          </a>
        </div>
      </div>
      <div className="evolution-bg-img">
        <img src={Webdesign} alt="" id="web-design" />
        <img src={Webdevelopment} alt="" id="web-development" />
        <img src={Softwaredevelopment} alt="" id="software-development" />
        <img src={EvolutionBackground} alt="" id="background-img" />
      </div>
    </div>
  );
};

export default Evolution;
