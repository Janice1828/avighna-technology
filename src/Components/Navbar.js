import React from "react";
import Logo from "../images/logoav 1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-80 m-auto d-flex justify-content-between align-items-center">
      <div className="avighna-nav-logo">
        <img src={Logo} alt="Avighna Logo" />
      </div>
      <div className="d-flex align-items-center gap-2 nav-link">
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
      <div className="contact-us-btn">
        <Link>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
