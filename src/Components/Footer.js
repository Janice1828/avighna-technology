import React from "react";
import Linkedinlogo from "../images/linkedin black.1.png";
import Instagramlogo from "../images/instagram black.1.png";
import Footerlogo from "../images/logo-black 1.png";
import Facebooklogo from "../images/facebook black.1.png";
import Twitterlogo from "../images/twitter black.1.png";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center">
      <div className="footer-content">
        <div className="company-details d-flex justify-content-between">
          <div>
            <img src={Footerlogo} alt="" />
            <h5 id="company-address">Kupondole, Lalitpur, Nepal</h5>
            <p id="email">info@avighnatechnology.com</p>
            <p id="contact-no">980113860/81/82/84</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Insight</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 id="social-media-title">Social Media</h3>
            <p id="social-media-content">
              Stay Connected with us through
              <br /> our digital community
            </p>
            <div className="social-media-icons d-flex gap-2">
              <img src={Facebooklogo} alt="" className="cursor-pointer" />
              <img src={Instagramlogo} alt="" className="cursor-pointer" />
              <img src={Linkedinlogo} alt="" className="cursor-pointer" />
              <img src={Twitterlogo} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="footer-links mt-3 d-flex justify-content-between">
          <p>&copy; 2024 Avighna Technology. All rights reserved.</p>
          <div className="d-flex gap-2">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF USE</a>
            <a href="#">SITEMAP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
