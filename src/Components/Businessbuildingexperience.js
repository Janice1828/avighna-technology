import React from "react";

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
  return (
    <div className="business-building-experience d-flex">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h5 id="about">{mainTitle}</h5>
        <h2 id="business-building-experience">{title}</h2>
        <p id="business-building-content">{content}</p>
        <div className="d-flex align-items-center gap-2">
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
