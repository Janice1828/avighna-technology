import React, { useEffect, useState } from "react";
import Blackarrow from "../images/black_arrow.png";

const Featuredproject = ({
  mainTitle,
  title,
  paymor,
  gymcloud,
  digitalWallet,
}) => {
  const [colorTitle, setColorTitle] = useState([]);
  useEffect(() => {
    const colorArr = title.split(" ");
    setColorTitle(colorArr);
  }, []);
  return (
    <>
      <div className="digital-wallet">
        <div className="w-90">
          <h5 className="sub-sub-heading text-center">{mainTitle}</h5>
          <h1 className="headings text-center customized-solutios-heading">
            {colorTitle.map((item, id) => (
              <span
                key={id}
                className={
                  id === 6 || id === 7 || id === 8 || id === 9
                    ? "text-blue"
                    : " "
                }
              >
                {item}&nbsp;
              </span>
            ))}
          </h1>
          <div
            className="d-flex gap-4 digital-wallet-paymor"
            style={{ flexWrap: "wrap" }}
          >
            <div className="w-g-30 digital-wallet-card">
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">{digitalWallet.title}</h2>
                  <p className="contents digital-wallet-content mw-100">
                    {digitalWallet.content}
                  </p>
                  <div className="d-flex position-relative">
                    <a
                      href="#"
                      className="case-study position-absolute"
                      style={{ left: "-15px" }}
                    >
                      View Case Study <img src={Blackarrow} alt="" />
                    </a>
                    <img
                      src={digitalWallet.img}
                      alt=""
                      className="digital-wallet-imgs mw-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-g-70 paymor-card">
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">{paymor.title}</h2>
                  <p className="contents paymor-content mw-100">
                    {paymor.content}
                  </p>
                  <div className="d-flex paymor-case-study">
                    <a href="#" className="case-study">
                      View Case Study <img src={Blackarrow} alt="" />
                    </a>
                    <img src={paymor.img} className="mw-100" alt="" />
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
                <img src={gymcloud.img} alt="" className="mw-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuredproject;
