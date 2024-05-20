import React from "react";
import CeoSignature from "../images/george-walker-bush-signature 1.png";
import Businessexp from "../images/jason-goodman-Oalh2MojUuk-unsplash 1.png";
import CEO from "../images/Image 1x1.png";

const Businessbuildingexperience = () => {
  return (
    <div className="business-building-experience d-flex">
      <div>
        <img src={Businessexp} alt="" />
      </div>
      <div>
        <h5 id="about">About</h5>
        <h2 id="business-building-experience">
          Over&nbsp;
          <span className="experience-years">25 Years Of Experience</span>
          &nbsp;In Building Business
        </h2>
        <p id="business-building-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut elit tellus, luctus nec.
        </p>
        <div className="d-flex align-items-center gap-2">
          <div className="happy-customers-number d-flex align-items-center gap-1">
            <h1 id="happy-customer-count">280+</h1>
            <h5>
              Happy
              <br /> Customers
            </h5>
          </div>
          <div className="project-completed-number d-flex align-items-center gap-1">
            <h1>56+</h1>
            <h5>
              Project <br /> Completed
            </h5>
          </div>
          <div></div>
        </div>
        <div className="avighna-technologies-ceo-signature d-flex align-items-center gap-1">
          <img src={CEO} alt="" />
          <div>
            <img src={CeoSignature} alt="" />
            <h5>Francis Towne</h5>
            <p>CEO | Avighna Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businessbuildingexperience;
