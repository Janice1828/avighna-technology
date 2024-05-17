import React from "react";
import Logo from "../images/logoav 1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-80 m-auto d-flex justify-content-between align-items-center">
      <div className="avighna-nav-logo">
        <img src={Logo} alt="Avighna Logo" />
      </div>
      <div className="d-flex align-items-center gap-2">
        <Link to="#" className="text-decoration-none">
          Home
        </Link>
        <Link to="#" className="text-decoration-none">
          Work
        </Link>
        <Link to="#" className="text-decoration-none">
          Company
        </Link>
        <Link to="#" className="text-decoration-none">
          Our Insight
        </Link>
        <Link to="#" className="text-decoration-none">
          Career
        </Link>
      </div>
      <div className="contact-us-btn">
        <Link>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
