import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Trustedclients = ({ heading, data }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      250: {
        items: 2,
      },
      300: {
        items: 2,
      },
      450: {
        items: 3,
      },
      750: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="trusted-clients d-flex">
      <div className="w-30 clients-logos-heading">
        <h4>{heading}</h4>
      </div>
      <div className="w-70 companies-logo">
        <div className="trusted-companies-logos d-flex">
          <OwlCarousel {...options} className="owl-theme" loop nav margin={8}>
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
