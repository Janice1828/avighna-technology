import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Trustedclients = ({ heading, data }) => {
  return (
    <div className="trusted-clients d-flex">
      <div className="w-30 clients-logos-heading">
        <h4>{heading}</h4>
      </div>
      <div className="w-70 companies-logo">
        <div className="trusted-companies-logos d-flex">
          <OwlCarousel items={5} className="owl-theme" loop nav margin={8}>
            {data.map((img, id) => (
              <a href="#" key={id}>
                <img src={img} alt="" />
              </a>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Trustedclients;
