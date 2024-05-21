import React from "react";
import Rightcol from "../images/Right-col.png";
import Blackarrow from "../images/black_arrow.png";
const Innovative = () => {
  return (
    <>
      <div className="innvotive-intuitive">
        <div>
          <div className="d-flex">
            <div>
              <h1>
                Delivering
                <span>
                  <br /> Innovative & <br /> Intuitive
                </span>
                &nbsp;Digital
                <br /> Experiences
              </h1>
              <p id="innvotive-intuitive-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus nec.
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
            <div>
              <img src={Rightcol} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;
