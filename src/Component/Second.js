import React, { useEffect } from "react";
import "../style.css";
import LazyLoad from "react-lazyload";
import { getVendorFromPath, UTM_PARAMS } from "../config/vendor";
import { useTracking } from "../context/TrackingContext";

const Second = () => {
  const { trackEvent, trackConversion } = useTracking();
  // const isScreen = window.innerWidth > 768;
  const vendor = getVendorFromPath();
  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Get iframe height based on vendor
  // const getIframeHeight = () => {
  //   return vendor?.id === "vmp" ? "690px" : "1020px";
  // };

  // Track page view
  useEffect(() => {
    trackEvent("page_view", {
      page_title: "Subscription Page",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, [trackEvent]);

  const handleSubscriptionClick = () => {
    // Track conversion
    trackConversion("16783381103", "subscription_top_checkout_click");

    // Track event
    trackEvent("top_checkout_click", {
      currency: "USD",
      value: 0.01,
      items: [
        {
          item_name: "Penny a Day Subscription",
          price: 0.01,
          quantity: 1,
        },
      ],
    });
  };

  // Vendor-specific checkout URL
  const getVendorCheckoutUrl = () => {
    const urlVendorId = currentUrl.split("-").pop();
    const vendorPrefix =
      vendor?.checkoutPrefix ||
      `penny-a-day-${urlVendorId}` ||
      "penny-a-day-obs";

    // Get default parameters for this vendor
    // const defaultParams =
    //   VENDOR_PARAMS[vendorPrefix] || VENDOR_PARAMS["penny-a-day-obs"];
    const utmParams = UTM_PARAMS[vendorPrefix] || UTM_PARAMS["penny-a-day-obs"];

    // Build URL with query parameters
    const baseUrl = `https://checkout.nysun.com/${vendorPrefix}`;
    const queryParams = new URLSearchParams({
      // UTM params
      utm_source: utmParams.utm_source,
      // utm_medium: utmParams.utm_medium,
      // utm_campaign: utmParams.utm_campaign,
      // utm_content: utmParams.utm_content,

      // Vendor params
      // vendor_name: defaultParams.vendor_name,
      // vendor_campaign: defaultParams.vendor_campaign,
      // creative: defaultParams.creative,
    }).toString();

    return `${baseUrl}${queryParams ? "?" + queryParams : ""}`;
  };

  return (
    <div
      className="bg-text-pic md:pt-[56px] md:pb-[40px] bg-no-repeat bg-size"
      style={{ backgroundSize: "100%", backgroundAttachment: "fixed" }}
      id="scrollTop"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-end max-w-[1100px] px-[16px] md:px-0 py-[32px] md:py-0 relative z-10">
        {/* Left Side: Subscription Form */}
        <div className="shadow-lg max-w-[480px] w-full md:mx-[35px]">
          <LazyLoad>
            <iframe
              onClick={handleSubscriptionClick}
              className="cp-frame main-frame"
              id="cp-checkout-the-new-york-sun-penny-a-day-zku4dlc"
              title="Checkout frame"
              width="100%"
              height="690px"
              allow="payment *"
              loading="lazy"
              style={{
                overflow: "hidden",
              }}
              src={getVendorCheckoutUrl()}
              // style="background-color: transparent; border: none;"
            ></iframe>
          </LazyLoad>
        </div>

        {/* Right Side: Text Block */}
        <div className=" text-white  md:max-w-[50%] w-full mt-[5px] md:mt-0">
          <div className="bg-[#041e3a] py-[8px] text-center">
            <h3 className="text-2xl md:text-[31.2px] min-h-[22.4px] leading-[38.4px] font-nomal font-playfair">
              JOIN THE MOVEMENT TO&nbsp;
            </h3>
            <h3 className="text-2xl md:text-[31.2px] min-h-[22.4px] leading-[38.4px] font-playfair">
              RESTORE AMERICAN <br className="sm:block md:hidden" />
              JOURNALISM
            </h3>
          </div>
          <div className="bg-white py-7 px-4 text-black text-center">
            <p className="text-[19.2px] leading-[24px] mb-[21px] font-opensans">
              &nbsp;&nbsp;There’s one paper that&nbsp;continues{" "}
              <br className="sm:block md:hidden" />
              to uphold the finest traditions of American journalism:The New{" "}
              <br className="sm:block md:hidden" />
              York Sun.
            </p>
            <p className="text-[19.2px] leading-[24px] mb-[21px] font-opensans">
              The New York Sun has served as
              <br className="sm:block md:hidden" /> the counterweight to{" "}
              <br className="hidden md:block" />
              The New <br className="sm:block md:hidden" />
              York Times for nearly 200 years. Now,
              <br className="hidden md:block" /> Americans who have lost faith
              in mainstream newspapers
              <br className="hidden md:block" /> are rediscovering the
              principled and patriotic voice of The
              <br className="hidden md:block" /> New York Sun.
            </p>
            <p className="text-[19.2px] leading-[24px] mb-[30px] font-opensans">
              For a limited time, you can subscribe for<br></br>
              <span className="font-semibold underline">
                just ONE PENNY A DAY
              </span>
              .
            </p>
            <p className="text-[#a81a31] text-[22px] leading-[26px] font-opensans font-bold">
              There’s no risk.
            </p>
            <p className="text-[#a81a31] text-[22px] leading-[26px] font-opensans font-bold">
              You can pause or cancel any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
