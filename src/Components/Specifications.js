import React from "react";
import SuccessProject from "../images/attendance.png";
import HappyClients from "../images/Icon.png";
import Ourpresence from "../images/Icon (1).png";

const Specifications = () => {
  return (
    <div className="our-specifications">
      <h5 className="text-center">Benefits</h5>
      <h1 className="text-center">
        What Makes Us <span>Different</span>?
      </h1>
      <div className="d-flex specification-lists">
        <div className="succeed-projects d-flex align-items-center justify-content-center flex-column">
          <img src={SuccessProject} alt="" />
          <h3>
            Over Thousand Success
            <br /> Projects
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
        <div className="happy-clients-counting d-flex align-items-center justify-content-center flex-column">
          <img src={HappyClients} alt="" />
          <h3>Over 756+ happy clients and counting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
        <div className="our-presence d-flex align-items-center justify-content-center flex-column">
          <img src={Ourpresence} alt="" />
          <h3>Our presence in overseas countries.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
