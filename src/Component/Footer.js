import React from "react";
import  LazyLoad  from "react-lazyload";

const Footer = () => {
  return (
    // py-6
    <footer className="bg-black px-[16px] pt-[16px]  text-center">
      <div className="container mx-auto flex justify-center items-center px-4">
        <div className="flex items-center">
          <LazyLoad>
            <img
              src="./footer-img.png"
              alt="The New York Sun Logo"
              className="w-[76px] h-[76px]"
            />
          </LazyLoad>
        </div>
      </div>
      <p className="!text-[#d1d1cc] pb-[24px] text-[13px] leading-[17px] font-opensans">
        {" "}
        © 2022 The New York Sun Company, LLC. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
