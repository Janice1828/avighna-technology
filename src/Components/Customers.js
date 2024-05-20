import React, { useEffect, useState } from "react";
import Quote from "../images/ci_double-quotes-l.png";
import CEO from "../images/Image 1x1.png";
import Customersdata from "../data/Customersdata";
import Leftarrow from "../images/left-arrow.png";
import Rightarrow from "../images/right-arrow.png";
const Customers = () => {
  const [customerData, setCustomerData] = useState(Customersdata[0]);
  const displayCustomers = (id) => {
    function findId(num) {
      if (num.id == id) {
        return num;
      }
    }

    const data = Customersdata.find(findId);
    setCustomerData(data);
  };
  const previousData = () => {
    const currentDataInd = Customersdata.indexOf(customerData);
    if (currentDataInd >= 1) {
      const newData = Customersdata[currentDataInd - 1];
      setCustomerData(newData);
    }
  };
  const nextData = () => {
    const currentDataInd = Customersdata.indexOf(customerData);
    if (currentDataInd < Customersdata.length - 1) {
      const newData = Customersdata[currentDataInd + 1];
      setCustomerData(newData);
    }
  };
  return (
    <div className="customers-pink-bg">
      <div className="w-50">
        <div className="customers position-relative">
          <h5 className="sub-sub-heading text-center">Customers</h5>
          <h1 className="headings text-center">
            <span>Trusted</span> By Thousand For Companies & Individuals
          </h1>
          <div className="d-flex align-items-center gap-3">
            <div>
              <img
                src={Leftarrow}
                alt=""
                className="carousel-arrow"
                onClick={() => {
                  previousData();
                }}
              />
            </div>
            <div className="d-flex justify-content-center position-relative gap-3">
              <div>
                <img
                  src={customerData.img}
                  alt=""
                  id="ceogrey"
                  style={{
                    height: "128px",
                    width: "128px",
                    objectFit: "contain",
                  }}
                />
                <h5 id="customers-ceo-name">{customerData.name}</h5>
                <p className="contents" style={{ paddingBottom: "0px" }}>
                  {customerData.designation}
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
                  <br /> vitae. Fringilla massa facilisis non mattis mauris
                  nisl.
                  <br /> Dui ut hendrerit fames imperdiet proin nisl sit
                  <br />
                  mauris.”
                </p>
              </div>
            </div>
            <div>
              <img
                src={Rightarrow}
                alt=""
                className="carousel-arrow"
                onClick={() => {
                  nextData();
                }}
              />
            </div>
          </div>
          <div className="slider-lists mt-3 d-flex gap-2">
            {Customersdata.map((item) => (
              <p
                key={item.id}
                className={`cursor-pointer btn ${
                  item.id === customerData.id ? "sliderborder" : " "
                }`}
                onClick={() => {
                  displayCustomers(item.id);
                }}
              ></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
