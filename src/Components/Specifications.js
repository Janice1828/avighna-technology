import React from "react";

const Specifications = ({ mainTitle, title, data }) => {
  return (
    <div className="our-specifications">
      <h5 className="text-center">{mainTitle}</h5>
      <h1 className="text-center">{title}</h1>
      <div className="d-flex specification-lists justify-content-center">
        {data.map((item) => (
          <div className={item.class} key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
