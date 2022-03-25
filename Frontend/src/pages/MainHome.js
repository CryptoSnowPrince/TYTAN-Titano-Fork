import React from "react";
import Header from "../components/mainHeader";
import Banner from "../sections/Banner";
import Protocol from "../sections/Protocol";
import Earn from "../sections/Earn";
import HowItWorks from "../sections/HowItWorks";
import Liquidity from "../sections/Liquidity";
import Footer from "../sections/Footer";
const MainHome = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Protocol />
      <div className="how-it-works">
        <Earn />
        <HowItWorks />
      </div>
      <Liquidity />
      <Footer />
    </div>
  );
};

export default MainHome;
