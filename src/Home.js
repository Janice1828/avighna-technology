import React from "react";
import Navbar from "./Components/Navbar";
import Evolution from "./Components/Evolution";
import Trustedclients from "./Components/Trustedclients";
import Businessbuildingexperience from "./Components/Businessbuildingexperience";
import Specifications from "./Components/Specifications";
import Industriesdomain from "./Components/Industriesdomain";
import Featuredproject from "./Components/Featuredproject";
import Customers from "./Components/Customers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div
          className="avighna-content-container"
          style={{ paddingTop: "30px" }}
        >
          <div className="w-80 m-auto">
            <div>
              <Evolution />
              <Trustedclients />
            </div>
            <Businessbuildingexperience />
            <Specifications />
          </div>
        </div>
        <Industriesdomain />
        <div className="customized-solutions">
          <Featuredproject />
          <Customers />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
