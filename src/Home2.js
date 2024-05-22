import React from "react";
import Navbar from "./Components/Navbar";
import Trustedclients from "./Components/Trustedclients";
import Businessbuildingexperience from "./Components/Businessbuildingexperience";
import Specifications from "./Components/Specifications";
import Industriesdomain from "./Components/Industriesdomain";
import Featuredproject from "./Components/Featuredproject";
import Customers from "./Components/Customers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Innovative from "./Components/Innovative";
import TrustedClientsData from "./data/TrustedClientsData";
import BusinessBuildingExperienceData from "./data/BusinessBuildingExperienceData";
import SpecificationData from "./data/SpecificationData";
import ServicesData from "./data/ServicesData";
import FeaturedProjectData from "./data/FeaturedProjectData";
import Customersdata from "./data/Customersdata";
import InnovativeData from "./data/InnovativeData";
const Home2 = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div
          className="avighna-content-container"
          style={{ paddingTop: "50px" }}
        >
          <div className="w-90 m-auto">
            <div>
              <Innovative
                title={InnovativeData.title}
                content={InnovativeData.content}
                img={InnovativeData.img}
              />
              <Trustedclients
                heading={TrustedClientsData.heading}
                data={TrustedClientsData.data}
              />
            </div>
            <Businessbuildingexperience
              mainTitle={BusinessBuildingExperienceData.mainTitle}
              title={BusinessBuildingExperienceData.title}
              content={BusinessBuildingExperienceData.content}
              happyCustomerNumber={
                BusinessBuildingExperienceData.happyCustomerNumber
              }
              projectCompletedNumber={
                BusinessBuildingExperienceData.projectCompletedNumber
              }
              ceoImg={BusinessBuildingExperienceData.ceoImg}
              CeoSign={BusinessBuildingExperienceData.CeoSign}
              ceoName={BusinessBuildingExperienceData.ceoName}
              img={BusinessBuildingExperienceData.img}
            />
            <Specifications
              mainTitle={SpecificationData.mainTitle}
              title={SpecificationData.title}
              data={SpecificationData.data}
            />
          </div>
        </div>
        <Industriesdomain
          mainTitle={ServicesData.mainTitle}
          title={ServicesData.title}
          data={ServicesData.data}
        />
        <div className="customized-solutions">
          <Featuredproject
            title={FeaturedProjectData.title}
            mainTitle={FeaturedProjectData.mainTitle}
            paymor={FeaturedProjectData.paymor}
            gymcloud={FeaturedProjectData.gymcloud}
            digitalWallet={FeaturedProjectData.digitalWallet}
          />
          <Customers
            mainTitle={Customersdata.mainTitle}
            title={Customersdata.title}
            content={Customersdata.content}
            data={Customersdata.data}
          />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home2;
