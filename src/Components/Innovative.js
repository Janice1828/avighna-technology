import React, { useEffect, useState } from "react";
import Blackarrow from "../images/black_arrow.png";
const Innovative = ({ title, content, img }) => {
  const [colorTitle, setColorTitle] = useState([]);
  useEffect(() => {
    const titleArr = title.split(" ");
    setColorTitle(titleArr);
  }, []);
  return (
    <>
      <div className="innvotive-intuitive">
        <div>
          <div
            className="d-flex justify-content-between"
            style={{ flexWrap: "wrap" }}
          >
            <div className="">
              <h1>
                {colorTitle.map((item, id) => (
                  <span
                    key={id}
                    className={
                      id === 1 || id === 2 || id === 3 ? "text-blue" : " "
                    }
                  >
                    {item}&nbsp;
                  </span>
                ))}
              </h1>
              <p id="innvotive-intuitive-content">{content}</p>
              <div className="btn-groups gap-4 d-flex align-items-center">
                <a href="#" className="innovative-learn-more-btn">
                  Learn More
                </a>
                <a href="#" className="innovative-see-our-work-btn">
                  See Our Work <img src={Blackarrow} alt="" />
                </a>
              </div>
            </div>
            <div className="">
              <img src={img} style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;
