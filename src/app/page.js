import React from "react";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section4 from "./components/Sec4Plans";
import GridSection from "./components/Section3";
import HelpSection from "./components/HelpSection";
import SubscribeSec from "./components/SubscribeSec";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <div className="mx-28 ">
        <HeroSection />
        <Section2 />
        <GridSection />
        <Section4 />
      </div>
      <div>
        <HelpSection />
      </div>
      <SubscribeSec />
      <Footer />
    </React.Fragment>
  );
}
