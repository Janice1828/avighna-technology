import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Focalpoint from "../images/655dd3fb64f47aa8e7693232_8.png";
import Nietzsche from "../images/655dd38454d3b0724855115b_6.png";
import Interlock from "../images/655dd319d83d9d9e3b5a6761_1.png";
import Biosynthesis from "../images/655dd3266f540ad011a48156_2 1.png";
import Spherule from "../images/655dd34b3b5f5ab873b54b1d_4.png";
const Trustedclients = () => {
  return (
    <div className="trusted-clients d-flex">
      <div className="w-30">
        <h4>Trusted By Thousand For Companies & Individuals</h4>
      </div>
      <div className="w-70">
        <div className="trusted-companies-logos d-flex">
          <OwlCarousel items={5} className="owl-theme" loop nav margin={8}>
            <div>
              <img src={Nietzsche} alt="" />
            </div>
            <div>
              <img src={Focalpoint} alt="" />
            </div>
            <div>
              <img src={Spherule} alt="" />
            </div>
            <div>
              <img src={Interlock} alt="" />
            </div>
            <div>
              <img src={Biosynthesis} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Trustedclients;
