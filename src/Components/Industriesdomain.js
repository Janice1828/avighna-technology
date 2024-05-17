import React from "react";
import Industriesdomainimg from "../images/Mockup.png";

const Industriesdomain = () => {
  return (
    <div className="industries-domains">
      <div className="w-80">
        <h5 className="text-center">Services</h5>
        <h1 className="text-center">
          Our Work Spans
          <br /> <span>Industries & Domains</span>
        </h1>
        <div className="industries-domains-img d-flex justify-content-center flex-column">
          <img src={Industriesdomainimg} alt="" />
          <div className="d-flex gap-2 mt-4">
            <p className="cursor-pointer" id="border-top"></p>
            <p className="cursor-pointer">02 Attendance/Payroll Software</p>
            <p className="cursor-pointer">03 Attendence Devices</p>
            <p className="cursor-pointer">04 Security System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industriesdomain;
