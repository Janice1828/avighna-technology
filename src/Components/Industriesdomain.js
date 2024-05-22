import React, { useEffect, useState } from "react";

const Industriesdomain = ({ mainTitle, title, data }) => {
  const initValue = data[0];
  const [serviceImg, setServiceImg] = useState(initValue);
  const displayservice = (id) => {
    setServiceImg(data[id]);
  };
  const [colorTitle, setColorTitle] = useState([]);
  useEffect(() => {
    const colorArr = title.split(" ");
    setColorTitle(colorArr);
  }, []);
  return (
    <div className="industries-domains">
      <div className="w-90">
        <h5 className="text-center">{mainTitle}</h5>
        <h1 className="text-center d-flex justify-content-center">
          {colorTitle.map((item, id) => (
            <span
              key={id}
              className={
                id === 3 || id === 4 || id === 5 ? "evolution-text-blue" : " "
              }
            >
              {item}&nbsp;
            </span>
          ))}
        </h1>
        <div className="industries-domains-img d-flex justify-content-center flex-column">
          <img
            src={serviceImg.img}
            alt=""
            style={{ height: "650px", objectFit: "cover" }}
          />
          <div className="d-flex gap-4 mt-4" style={{ flexWrap: "wrap" }}>
            {data.map((service) => (
              <p
                className={`cursor-pointer services-lists ${
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
