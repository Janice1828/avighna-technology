import React from "react";
import Digitalwallet from "../images/mockup1.png";
import Paymor from "../images/mockup3.png";
import Gymcloud from "../images/mockup2.png";
import Blackarrow from "../images/black_arrow.png";

const Featuredproject = () => {
  const displayModal = () => {
    alert("asd");
  };
  return (
    <>
      <div className="digital-wallet">
        <div className="w-80">
          <h5 className="sub-sub-heading text-center">Featured Project</h5>
          <h1 className="headings text-center">
            Get An Idea Of How We
            <br /> <span>Discover, Design & Build</span>
            <br /> Customized Solutions
          </h1>
          <div className="d-flex gap-2">
            <div className="w-30">
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">Digital Wallet</h2>
                  <p className="contents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a href="#" className="case-study">
                    View Case Study <img src={Blackarrow} alt="" />
                  </a>
                  <img src={Digitalwallet} alt="" />
                </div>
              </div>
            </div>
            <div className="w-70">
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">Paymor</h2>
                  <p className="contents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </p>
                  <div className="d-flex">
                    <a href="#" className="case-study">
                      View Case Study <img src={Blackarrow} alt="" />
                    </a>
                    <img src={Paymor} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80">
        <div className="gym-cloud">
          <div className="card">
            <div className="card-content">
              <h2 className="sub-heading">Gym Cloud</h2>
              <p className="contents">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus nec.
              </p>
              <p
                onClick={displayModal}
                className="case-study pb-2 cursor-pointer"
              >
                View Case Study
                <img src={Blackarrow} alt="" />
              </p>
              <div className="d-flex justify-content-center">
                <img src={Gymcloud} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuredproject;
