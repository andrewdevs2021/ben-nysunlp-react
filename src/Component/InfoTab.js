import React from "react";
import LazyLoad from "react-lazyload";

const InfoTab = () => {
  return (
    <section className="bg-[#262633] py-10 md:py-8 text-center">
      <div className="max-[1100px] mx-auto px-4">
        <LazyLoad>
          <img
            className="w-[95px] h-[95px] rounded-lg mb-[15px] md:mb-[8px] mx-auto block"
            alt="A scenic view related to American journalism"
            src="./user-pic.webp"
          />
        </LazyLoad>
        {/* Quote section */}
        <h2 className="text-[22px] md:text-[28px] leading-[26.4px] md:leading-[34px] min-h-[22.4px]  text-white mb-4 font-playfair">
          "The Charge to Restore American Journalism is Being Led by the Sun."
        </h2>

        {/* Quote attribution */}
        <p className="text-[16px] leading-[24px] sm:text-[16px] text-white md:mb-8 font-opensans">
          - Larry Kudlow, TV Host, Fox, and{" "}
          <br className="sm:block md:hidden" />
          the Director of the National Economic&nbsp;
          <br className="sm:block md:hidden" />
          Council
        </p>
      </div>
    </section>
  );
};

export default InfoTab;
