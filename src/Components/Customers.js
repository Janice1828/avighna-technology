import React, { useEffect, useState } from "react";
import Quote from "../images/ci_double-quotes-l.png";
import Leftarrow from "../images/left-arrow.png";
import Rightarrow from "../images/right-arrow.png";
const Customers = ({ mainTitle, title, content, data }) => {
  const [customerData, setCustomerData] = useState(data[0]);

  const displayCustomers = (id) => {
    function findId(num) {
      if (num.id == id) {
        return num;
      }
    }
    const newdata = data.find(findId);
    setCustomerData(newdata);
  };
  const previousData = () => {
    const currentDataInd = data.indexOf(customerData);
    if (currentDataInd >= 1) {
      const newData = data[currentDataInd - 1];
      setCustomerData(newData);
    }
  };
  const nextData = () => {
    const currentDataInd = data.indexOf(customerData);
    if (currentDataInd < data.length - 1) {
      const newData = data[currentDataInd + 1];
      setCustomerData(newData);
    }
  };
  const [colorTitle, setColorTitle] = useState([]);
  useEffect(() => {
    const colorArr = title.split(" ");
    setColorTitle(colorArr);
  }, []);
  return (
    <div className="customers-pink-bg">
      <div className="d-flex justify-content-center">
        <div className="customers mw-100 position-relative">
          <h5 className="sub-sub-heading text-center">{mainTitle}</h5>
          <h1 className="headings text-center customer-heading">
            {colorTitle.map((item, id) => (
              <span key={id} className={id === 0 ? "text-blue" : " "}>
                {item}&nbsp;
              </span>
            ))}
          </h1>
          <div className="d-flex align-items-center customers-carousel gap-3 justify-content-center">
            <div>
              <img
                src={Leftarrow}
                alt=""
                className="carousel-arrow left-carousel-arrow"
                onClick={() => {
                  previousData();
                }}
              />
            </div>
            <div className="d-flex justify-content-center customer-details position-relative gap-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="userImg"
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
                <p
                  className="customer-designation text-center"
                  style={{ paddingBottom: "0px", fontSize: "14px" }}
                >
                  {customerData.designation}
                </p>
              </div>
              <div>
                <img
                  src={Quote}
                  alt="Quote"
                  className="position-absolute quote"
                />
                <p id="trusted-companies-content">{content}</p>
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
            {data.map((item) => (
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
