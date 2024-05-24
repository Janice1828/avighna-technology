import React, { useEffect, useState } from "react";

const Businessbuildingexperience = ({
  mainTitle,
  title,
  content,
  happyCustomerNumber,
  projectCompletedNumber,
  ceoImg,
  CeoSign,
  ceoName,
  img,
}) => {
  const [businessTitle, setBusinessTitle] = useState([]);
  useState(() => {
    const titleArr = title.split(" ");
    setBusinessTitle(titleArr);
  }, []);
  return (
    <div className="business-building-experience d-flex">
      <div className="">
        <img src={img} alt="" className="mw-100" />
      </div>
      <div className="">
        <h5 id="about">{mainTitle}</h5>
        <h2 id="business-building-experience">
          {businessTitle.map((item, id) => (
            <span
              key={id}
              className={
                id === 1 || id === 2 || id === 3 || id === 4 ? "text-blue" : " "
              }
            >
              {item}&nbsp;
            </span>
          ))}
        </h2>
        <p id="business-building-content" style={{ overflow: "hidden" }}>
          {content}
        </p>
        <div className="d-flex align-items-center gap-2 customer-project-counter">
          <div className="happy-customers-number d-flex align-items-center gap-1">
            <h1 id="happy-customer-count">{happyCustomerNumber}</h1>
            <h5>
              Happy
              <br /> Customers
            </h5>
          </div>
          <div className="project-completed-number d-flex align-items-center gap-1">
            <h1>{projectCompletedNumber}</h1>
            <h5>
              Project <br /> Completed
            </h5>
          </div>
          <div></div>
        </div>
        <div className="avighna-technologies-ceo-signature d-flex align-items-center gap-1">
          <img src={ceoImg} alt="" />
          <div>
            <img src={CeoSign} alt="" />
            <h5>{ceoName}</h5>
            <p>CEO | Avighna Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businessbuildingexperience;
