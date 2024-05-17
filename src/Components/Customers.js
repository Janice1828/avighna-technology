import React from "react";
import Quote from "../images/ci_double-quotes-l.png";
import CEO from "../images/Image 1x1.png";

const Customers = () => {
  return (
    <div className="customers-pink-bg">
      <div className="w-50">
        <div className="customers position-relative">
          <h5 className="sub-sub-heading text-center">Customers</h5>
          <h1 className="headings text-center">
            <span>Trusted</span> By Thousand For Companies & Individuals
          </h1>
          <div className="d-flex justify-content-center position-relative gap-3">
            <div>
              <img src={CEO} alt="" id="ceogrey" />
              <h5>Francis Towne</h5>
              <p className="contents">
                Future Response
                <br /> Technician
              </p>
            </div>
            <div>
              <img
                src={Quote}
                alt="Quote"
                className="position-absolute quote"
              />
              <p id="trusted-companies-content">
                “Lorem ipsum dolor sit amet consectetur. Adipiscing
                <br /> ut nisi leo nibh eros in. Sed nulla quis scelerisque
                <br /> vitae. Fringilla massa facilisis non mattis mauris nisl.
                <br /> Dui ut hendrerit fames imperdiet proin nisl sit
                <br />
                mauris.”
              </p>
            </div>
          </div>
          <div className="slider-lists d-flex gap-2">
            <p id="slider-first-border" className="cursor-pointer"></p>
            <p className="cursor-pointer"></p>
            <p className="cursor-pointer"></p>
            <p className="cursor-pointer"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
