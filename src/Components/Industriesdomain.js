import React, { useState } from "react";

const Industriesdomain = ({ mainTitle, title, data }) => {
  const initValue = data[0];
  const [serviceImg, setServiceImg] = useState(initValue);
  const displayservice = (id) => {
    setServiceImg(data[id]);
  };
  return (
    <div className="industries-domains">
      <div className="w-80">
        <h5 className="text-center">{mainTitle}</h5>
        <h1 className="text-center">{title}</h1>
        <div className="industries-domains-img d-flex justify-content-center flex-column">
          <img
            src={serviceImg.img}
            alt=""
            style={{ height: "650px", objectFit: "cover" }}
          />
          <div className="d-flex gap-2 mt-4">
            {data.map((service) => (
              <p
                className={`cursor-pointer ${
                  service.id === serviceImg.id ? "selected" : " "
                }`}
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
