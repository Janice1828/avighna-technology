import React, { useState } from "react";

import Services from "./Services";
const Industriesdomain = () => {
  const initValue = Services[0];
  const [serviceImg, setServiceImg] = useState(initValue);
  const displayservice = (id) => {
    setServiceImg(Services[id - 1]);
  };
  return (
    <div className="industries-domains">
      <div className="w-80">
        <h5 className="text-center">Services</h5>
        <h1 className="text-center">
          Our Work Spans
          <br /> <span>Industries & Domains</span>
        </h1>
        <div className="industries-domains-img d-flex justify-content-center flex-column">
          <img
            src={serviceImg.img}
            alt=""
            style={{ height: "650px", objectFit: "contain" }}
          />
          <div className="d-flex gap-2 mt-4">
            {Services.map((service) => (
              <p
                className="cursor-pointer"
                key={service.id}
                onClick={() => {
                  displayservice(service.id);
                }}
              >
                {service.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industriesdomain;
