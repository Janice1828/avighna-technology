import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logoav 1.png";
import EvolutionBackground from "./images/charlesdeluvio-Lks7vei-eAg-unsplash 1.png";
import Webdesign from "./images/Floating Element (2).png";
import Webdevelopment from "./images/Floating Element.png";
import Softwaredevelopment from "./images/Floating Element (1).png";
import Nietzsche from "./images/655dd38454d3b0724855115b_6.png";
import Focalpoint from "./images/655dd3fb64f47aa8e7693232_8.png";
import Spherule from "./images/655dd34b3b5f5ab873b54b1d_4.png";
import Interlock from "./images/655dd319d83d9d9e3b5a6761_1.png";
import Biosynthesis from "./images/655dd3266f540ad011a48156_2 1.png";
import Arrowicon from "./images/tabler-icon-arrow-up-right.png";
import Businessexp from "./images/jason-goodman-Oalh2MojUuk-unsplash 1.png";
import CEO from "./images/Image 1x1.png";
import CeoSignature from "./images/george-walker-bush-signature 1.png";
import SuccessProject from "./images/attendance.png";
import HappyClients from "./images/Icon.png";
import Ourpresence from "./images/Icon (1).png";
import Industriesdomain from "./images/Mockup.png";
import Footerlogo from "./images/logo-black 1.png";
import Facebooklogo from "./images/facebook black.1.png";
import Instagramlogo from "./images/instagram black.1.png";
import Twitterlogo from "./images/twitter black.1.png";
import Linkedinlogo from "./images/linkedin black.1.png";
import Digitalwallet from "./images/mockup1.png";
import Paymor from "./images/mockup3.png";
import Gymcloud from "./images/mockup2.png";
import Quote from "./images/ci_double-quotes-l.png";
import Blackarrow from "./images/black_arrow.png";
const Home = () => {
  return (
    <>
      <div className="container">
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
        <div
          className="avighna-content-container"
          style={{ paddingTop: "30px" }}
        >
          <div className="w-80 m-auto">
            <div>
              <div className="evolution">
                <div className="evolution-background-content">
                  <h1 className="text-center">
                    Your IT Evolution <br />
                    Starts Here
                  </h1>
                  <p className="text-center evolution-text-content">
                    Lorem Ipsum estibulum blandit libero at mauris condi mentum
                    males
                    <br /> uada scelerisque in mauris ut mada.
                  </p>
                  <div className="d-flex evolution-btns">
                    <a href="#" className="learn-more-btn">
                      Learn More
                    </a>
                    <a href="#" className="see-our-work-btn">
                      <span>See Our Work</span> <img src={Arrowicon} alt="" />
                    </a>
                  </div>
                </div>
                <div className="evolution-bg-img">
                  <img src={Webdesign} alt="" id="web-design" />
                  <img src={Webdevelopment} alt="" id="web-development" />
                  <img
                    src={Softwaredevelopment}
                    alt=""
                    id="software-development"
                  />
                  <img src={EvolutionBackground} alt="" id="background-img" />
                </div>
              </div>
              <div className="trusted-clients d-flex align-items-center">
                <div className="w-30">
                  <h4>Trusted By Thousand For Companies & Individuals</h4>
                </div>
                <div className="w-70">
                  <div className="trusted-companies-logos d-flex">
                    <img src={Nietzsche} alt="" />
                    <img src={Focalpoint} alt="" />
                    <img src={Spherule} alt="" />
                    <img src={Interlock} alt="" />
                    <img src={Biosynthesis} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="business-building-experience d-flex">
              <div className="w-50">
                <img src={Businessexp} alt="" />
              </div>
              <div className="w-50" style={{ paddingLeft: "25px" }}>
                <h5 id="about">About</h5>
                <h2 id="business-building-experience">
                  Over&nbsp;
                  <span className="experience-years">
                    25 Years Of Experience
                  </span>
                  &nbsp;In Building Business
                </h2>
                <p id="business-building-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut elit tellus, luctus nec.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <div className="happy-customers-number d-flex align-items-center gap-1">
                    <h1 id="happy-customer-count">280+</h1>
                    <h5>
                      Happy
                      <br /> Customers
                    </h5>
                  </div>
                  <div className="project-completed-number d-flex align-items-center gap-1">
                    <h1>56+</h1>
                    <h5>
                      Project <br /> Completed
                    </h5>
                  </div>
                  <div></div>
                </div>
                <div className="avighna-technologies-ceo-signature d-flex align-items-center gap-1">
                  <img src={CEO} alt="" />
                  <div>
                    <img src={CeoSignature} alt="" />
                    <h5>Francis Towne</h5>
                    <p>CEO | Avighna Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-specifications">
              <h5 className="text-center">Benefits</h5>
              <h1 className="text-center">
                What Makes Us <span>Different</span>?
              </h1>
              <div className="d-flex specification-lists">
                <div className="succeed-projects d-flex align-items-center justify-content-center flex-column">
                  <img src={SuccessProject} alt="" />
                  <h3>
                    Over Thousand Success
                    <br /> Projects
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>
                <div className="happy-clients-counting d-flex align-items-center justify-content-center flex-column">
                  <img src={HappyClients} alt="" />
                  <h3>Over 756+ happy clients and counting</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>
                <div className="our-presence d-flex align-items-center justify-content-center flex-column">
                  <img src={Ourpresence} alt="" />
                  <h3>Our presence in overseas countries.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="industries-domains">
          <div className="w-80">
            <h5 className="text-center">Services</h5>
            <h1 className="text-center">
              Our Work Spans
              <br /> <span>Industries & Domains</span>
            </h1>
            <div className="industries-domains-img d-flex justify-content-center flex-column">
              <img src={Industriesdomain} alt="" />
              <div className="d-flex gap-2 mt-4">
                <p className="cursor-pointer" id="border-top"></p>
                <p className="cursor-pointer">02 Attendance/Payroll Software</p>
                <p className="cursor-pointer">03 Attendence Devices</p>
                <p className="cursor-pointer">04 Security System</p>
              </div>
            </div>
          </div>
        </div>
        <div className="customized-solutions">
          <div className="digital-wallet">
            <div className="w-80">
              <h5 className="sub-sub-heading text-center">Featured Project</h5>
              <h1 className="headings text-center">
                Get An Idea Of How We
                <br /> <span>Discover, Design & Build</span>
                <br /> Customized Solutions
              </h1>
              <div className="d-flex gap-2">
                <div className="w-30">
                  <div className="card">
                    <div className="card-content">
                      <h2 className="sub-heading">Digital Wallet</h2>
                      <p className="contents">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                      <a href="#" className="case-study">
                        View Case Study <img src={Blackarrow} alt="" />
                      </a>
                      <img src={Digitalwallet} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-70">
                  <div className="card">
                    <div className="card-content">
                      <h2 className="sub-heading">Paymor</h2>
                      <p className="contents">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut elit tellus, luctus nec.
                      </p>
                      <div className="d-flex">
                        <a href="#" className="case-study">
                          View Case Study <img src={Blackarrow} alt="" />
                        </a>
                        <img src={Paymor} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-80">
            <div className="gym-cloud">
              <div className="card">
                <div className="card-content">
                  <h2 className="sub-heading">Gym Cloud</h2>
                  <p className="contents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec.
                  </p>
                  <p className="case-study pb-2">
                    View Case Study <img src={Blackarrow} alt="" />
                  </p>
                  <div className="d-flex justify-content-center">
                    <img src={Gymcloud} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="customers-pink-bg">
            <div className="w-50">
              <div className="customers position-relative">
                <h5 className="sub-sub-heading text-center">Customers</h5>
                <h1 className="headings text-center">
                  <span>Trusted</span> By Thousand For Companies & Individuals
                </h1>
                <div className="d-flex justify-content-center position-relative gap-3">
                  <div>
                    <img src={CEO} alt="" id="ceogrey" />
                    <h5>Francis Towne</h5>
                    <p className="contents">
                      Future Response
                      <br /> Technician
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
                      <br /> ut nisi leo nibh eros in. Sed nulla quis
                      scelerisque
                      <br /> vitae. Fringilla massa facilisis non mattis mauris
                      nisl.
                      <br /> Dui ut hendrerit fames imperdiet proin nisl sit
                      <br />
                      mauris.”
                    </p>
                  </div>
                </div>
                <div className="slider-lists d-flex gap-2">
                  <p id="slider-first-border" className="cursor-pointer"></p>
                  <p className="cursor-pointer"></p>
                  <p className="cursor-pointer"></p>
                  <p className="cursor-pointer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <div className="cta-section-bg-img d-flex align-items-center justify-content-center flex-column">
            <h5>Contact</h5>
            <h1>Got Project In Mind?</h1>
            <a href="#" className="lets-discuss-btn">
              Let's Discuss
            </a>
          </div>
        </div>
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
                  <img src={Facebooklogo} alt="" />
                  <img src={Instagramlogo} alt="" />
                  <img src={Linkedinlogo} alt="" />
                  <img src={Twitterlogo} alt="" />
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
      </div>
    </>
  );
};

export default Home;
