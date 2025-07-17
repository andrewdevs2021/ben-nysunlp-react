import React from "react";
import LazyLoad from "react-lazyload";

const Header = () => {
  return (
    <header className="text-white pt-[32px] md:pt-[16px] pb-[8px] px-[24px] md:px-0">
      {/* <div className="container mx-auto flex justify-center items-center"> */}
      <div className="flex justify-center items-center py-0.5">
        <LazyLoad>
        <img
          src="./header-logo.png"
          alt="The New York Sun Logo"
          className="w-[359px] h-[63px] mb-[10px]"
        />
        </LazyLoad>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;