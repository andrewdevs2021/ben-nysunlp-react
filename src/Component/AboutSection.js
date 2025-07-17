import React from "react";
import "../style.css";
const AboutSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  })
};
  return (
    <section className="bg-gray-50 py-12 md:py-10 px-4 text-center w-full h-auto bg-text-pattern bg-size-about" style={{ "backgroundSize": "100%", "backgroundAttachment": "fixed" }}>
      <div className="max-w-[1100px] mx-auto md:p-2 relative z-10">
        <h2 className="text-[30.4px] md:text-[46.4px] mt-[8px] md:mt-[0] md:leading-[63.45px] text-[#041e3a] md:mb-4 uppercase font-playfair min-h-[16px] font-extrabold">
          About The <br className="sm:block md:hidden" />New York Sun
        </h2>
        <p className="text-center font-bold text-[17.6px] leading-[24px] text-[#041A33] max-w-2xl mx-auto mt-6 mb-8 bg-white p-4 border-[5.45px] border-[#b5903e] font-opensans">
          &nbsp;&nbsp;The Sun has long led battles against socialism, communism,
          government extravagance, and encroachments of bureaucracy. <br></br>
          <br></br> Credited as “one of the most influential of American
          newspapers,”&nbsp;the Sun was founded in September 1833 by Benjamin
          Day.&nbsp; It sold for a penny, making news available for the first
          time to working men and women in New York. It ran its first
          abolitionist editorial on its fourth day in print, decades before
          emancipation.&nbsp;<br></br>
          <br></br>The Sun went on to became the first modern broadsheet&nbsp;
          <br></br>and America’s largest newspaper. <br></br>
          <br></br>
          &nbsp;&nbsp;In 2021, the Sun was relaunched to reclaim its historic
          role. For nearly 200 years the Sun has dedicated itself to upholding
          the finest journalistic traditions, seeking the truth and speaking out
          the sentiment of the American people.
          <br></br>
          <br></br>
          For the price of just one single penny per day, you can join a
          movement of Americans rediscovering integrity in journalism.
        </p>
        <button className="text-[22px] leading-[33px] bg-[#C19D4A] text-white py-3 px-6 rounded-md  transition border-t-[1px] border-r-[1px] border-b-[4px] border-l-[1px] border-[#7C632A] font-playfair" onClick={scrollToTop}>
          Subscribe Today and Join the Movement to <br></br> Restore American
          Journalism
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
