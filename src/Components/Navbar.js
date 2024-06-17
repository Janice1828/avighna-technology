import React, { useState } from "react";
import Logo from "../images/logoav 1.png";
import { Link } from "react-router-dom";
import Menu from "../../src/images/menu.png";
import CrossIcon from "../../src/images/close.png";
const Navbar = () => {
  const toggleNav = () => {
    navDisplayToggle == "nav-links"
      ? setNavDisplayToggle("nav-links-responsive")
      : setNavDisplayToggle("nav-links");
    btnLogo == Menu ? setBtnLogo(CrossIcon) : setBtnLogo(Menu);
  };
  const [navDisplayToggle, setNavDisplayToggle] = useState("nav-links");
  const [btnLogo, setBtnLogo] = useState(Menu);
  return (
    <nav className="w-90 m-auto d-flex justify-content-between align-items-center">
      <div className="avighna-nav-logo">
        <img src={Logo} className="cursor-pointer" alt="Avighna Logo" />
      </div>
      <div className="d-flex nav-toggle">
        <div className={`d-flex align-items-center gap-2 ${navDisplayToggle}`}>
          <Link to="#" className="text-decoration-none nav-link">
            Home
          </Link>
          <Link to="#" className="text-decoration-none nav-link">
            Work
          </Link>
          <Link to="#" className="text-decoration-none nav-link">
            Company
          </Link>
          <Link to="#" className="text-decoration-none nav-link">
            Our Insight
          </Link>
          <Link to="#" className="text-decoration-none nav-link">
            Career
          </Link>
        </div>
        <div className="toggle-btn">
          <button onClick={toggleNav} id="nav-toggle-btn">
            <img src={btnLogo} alt="Tets" />
          </button>
        </div>
      </div>
      <div className="contact-us-btn">
        <Link>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
