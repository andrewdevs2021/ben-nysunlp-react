import React from "react";
import CountdownSection from "./Component/CountdownSection";
import VideoSection from "./Component/VideoSection";
import InfoTab from "./Component/InfoTab";
import SubscriptionOptions from "./Component/SubscriptionOptions";
import AboutSection from "./Component/AboutSection";
import AmericanFlag from "./Component/AmericanFlag";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Second from "./Component/Second";
import SecondReverse from "./Component/SecondReverse";

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* second */}
      <Second />
      {/* Countdown Timer */}
      <CountdownSection />
      {/* Video Section */}
      <VideoSection />
      {/* info tab   */}
      <InfoTab />
      {/* sub */}
      <SubscriptionOptions />
      {/* About Section */}
      <AboutSection />
      {/* Countdown Timer */}
      <CountdownSection />
      {/*  */}
      <SecondReverse />
      {/* AmericanFlag */}
      <AmericanFlag />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
