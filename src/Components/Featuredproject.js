import React from "react";
import Blackarrow from "../images/black_arrow.png";

const Featuredproject = ({
  mainTitle,
  title,
  paymor,
  gymcloud,
  digitalWallet,
}) => {
  return (
    <>
      <div className="digital-wallet">
        <div className="w-90">
          <h5 className="sub-sub-heading text-center">{mainTitle}</h5>
          <h1 className="headings text-center customized-solutios-heading">
            {title}
          </h1>
          <div className="d-flex gap-4">
            <div>
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">{digitalWallet.title}</h2>
                  <p className="contents digital-wallet-content">
                    {digitalWallet.content}
                  </p>
                  <div className="d-flex position-relative">
                    <a href="#" className="case-study">
                      View Case Study <img src={Blackarrow} alt="" />
                    </a>
                    <img
                      src={digitalWallet.img}
                      alt=""
                      className="position-absolute digital-wallet-imgs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">{paymor.title}</h2>
                  <p className="contents paymor-content">{paymor.content}</p>
                  <div className="d-flex">
                    <a href="#" className="case-study">
                      View Case Study <img src={Blackarrow} alt="" />
                    </a>
                    <img src={paymor.img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-90">
        <div className="gym-cloud">
          <div className="card">
            <div className="card-content">
              <h2 className="sub-heading">{gymcloud.title}</h2>
              <p className="contents gym-cloud-content">{gymcloud.content}</p>
              <p className="case-study pb-2 cursor-pointer">
                View Case Study
                <img src={Blackarrow} alt="" />
              </p>
              <div className="d-flex justify-content-center">
                <img src={gymcloud.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuredproject;
