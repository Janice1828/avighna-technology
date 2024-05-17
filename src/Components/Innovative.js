import React from "react";
import Rightcol from "../images/Right-col.png";
import Blackarrow from "../images/black_arrow.png";
const Innovative = () => {
  return (
    <>
      <div className="innvotive-intuitive">
        <div className="w-80">
          <div className="d-flex">
            <div className="w-50">
              <h1>
                Delivering
                <span>
                  <br /> Innovative & <br /> Intuitive
                </span>
                &nbsp;Digital
                <br /> Experiences
              </h1>
              <p id="innvotive-intuitive-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Ut elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                consectetur
                <br /> adipiscing elit. Ut elit tellus, luctus nec.
              </p>
              <div className="btn-groups gap-4 d-flex align-items-center">
                <a href="#" className="innovative-learn-more-btn">
                  Learn More
                </a>
                <a href="#" className="innovative-see-our-work-btn">
                  See Our Work <img src={Blackarrow} alt="" />
                </a>
              </div>
            </div>
            <div className="w-50">
              <img src={Rightcol} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;
