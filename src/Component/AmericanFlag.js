import React from "react";
import LazyLoad from "react-lazyload";

const AmericanFlag = () => {
  return (
    <div className="!bg-[#EDEDE9] py-[32px]">
      <div className="text-center max-w-[1100px] mx-auto ">
        <LazyLoad>
          <img
            src="./american-flag.png"
            alt="American Flag"
            className="w-[160px] h-auto mx-auto mt-[8px]" // Added mx-auto here
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default AmericanFlag;
