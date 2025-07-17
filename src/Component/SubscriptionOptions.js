import React from "react";
import LazyLoad from "react-lazyload";
import { getVendorFromPath, UTM_PARAMS } from "../config/vendor";
import { useTracking } from "../context/TrackingContext";

const SubscriptionOptions = () => {
  const { trackEvent, trackConversion } = useTracking();
  const isScreen = window.innerWidth > 991;
  const vendor = getVendorFromPath();

  // Get iframe height based on vendor
  // const getIframeHeight = () => {
  //   return vendor?.id === "vmp" ? "690px" : "1020px";
  // };

  const handleSubscriptionLeftClick = () => {
    trackConversion("16783381103", "subscription_left_checkout_click");
    trackEvent("begin_checkout_full_price", {
      currency: "USD",
      value: 120.0,
      subscription_type: "basic",
      section: "subscription_options",
      items: [
        {
          item_name: "Sun Reader Basic Subscription",
          price: 120.0,
          quantity: 1,
        },
      ],
    });
  };

  const handleSubscriptionRightClick = () => {
    trackConversion("16783381103", "subscription_right_checkout_click");
    trackEvent("begin_checkout_full_price", {
      currency: "USD",
      value: 250.0,
      subscription_type: "premium",
      section: "subscription_options",
      items: [
        {
          item_name: "Sun Reader Premium Subscription",
          price: 250.0,
          quantity: 1,
        },
      ],
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePennyOfferClick = () => {
    trackEvent("section_navigation", {
      from_section: "subscription_options",
      to_section: "top",
      action: "penny_offer_click",
    });
    scrollToTop();
  };

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

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
    <section className="bg-white text-center">
      <div className="max-w-[1100px] mx-auto relative mb-2">
        <h3
          className="text-[31.2px] md:text-[44.2px] font-normal mt-6 mb-5 leading-[47.6px] font-playfair 
      border-b-0 pb-[28px] relative z-10 text-[#333333]"
        >
          Interested in a Full Price Subscription?
        </h3>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b5903e] to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center  md:gap-6">
        {/* left side */}
        <div className="px-[16px] md:px-16 rounded-lg flex-1">
          <div
            style={{ width: isScreen ? "500px" : "100%" }}
            className="mx-auto"
          >
            <h4 className="text-[24px] md:text-[34px] font-normal text-[#333333] mb-[16px] md:mb-2 leading-[36px] md:leading-[51px] font-playfair">
              Sun Reader: <span className="!text-[#6d6d6b]">$120/Year</span>
            </h4>
            <div className="md:px-[24px] md:py-[16px]">
              <p className="text-[16px] font-bold text-[#333333] leading-[24px] font-opensans mb-[16px]">
                Easy access, flexible and ad-free browsing experience.
              </p>
              <p className="text-[16px] font-normal text-[#333333] leading-[24px] font-opensans">
                ☀️&nbsp;Unlimited reader commenting access.
              </p>
              <p className="text-[16px] font-normal text-[#333333] leading-[24px] font-opensans mb-10">
                ☀️&nbsp;100% ad free experience
              </p>
              <p className="text-[16px] font-semibold text-[#6d6d6b] leading-[16px] font-opensans">
                CANCEL ANYTIME.
              </p>
            </div>
            <LazyLoad>
              <iframe
                onClick={handleSubscriptionLeftClick}
                className="cp-frame"
                id="cp-checkout-the-new-york-sun-sun-member-embed-zis9osu"
                title="Checkout frame"
                width="100%"
                height="690px"
                allow="payment *"
                loading="lazy"
                style={{
                  overflow: "hidden",
                }}
                src={getVendorCheckoutUrl()}
              ></iframe>
            </LazyLoad>
          </div>
        </div>
        {/* right side */}
        <div className="px-[16px] md:px-16 rounded-lg flex-1">
          <div
            className="mx-auto"
            style={{ width: isScreen ? "500px" : "100%" }}
          >
            <h4 className="text-[24px] md:text-[34px] font-normal text-[#333333] mb-2 leading-[36px] md:leading-[51px] font-playfair">
              Sun Reader: <span className="!text-[#6d6d6b]">$250/Year</span>
            </h4>
            <div className="md:px-[24px] md:py-[16px]">
              <p className="text-[16px] font-semibold text-[#333333] leading-[24px] font-opensans  mb-[16px]">
                Join the movement to restore American journalism.
              </p>
              <p className="text-[16px] font-normal text-[#333333] leading-[24px] font-opensans ">
                ☀️ Unlimited reader and commenting access
              </p>
              <p className="text-[16px] font-normal text-[#333333] leading-[24px] font-opensans ">
                ☀️ Podcasts, member forums and VIP livestreams
              </p>
              <p className="text-[16px] font-normal text-[#333333] leading-[24px] font-opensans mb-[16px]">
                ☀️ Unlimited access to the Sun's crossword puzzles
              </p>
              <p className="text-[16px] font-semibold text-[#6d6d6b] leading-[16px] font-opensans">
                CANCEL ANYTIME.
              </p>
            </div>
            <LazyLoad>
              <iframe
                onClick={handleSubscriptionRightClick}
                className="cp-frame"
                id="cp-checkout-the-new-york-sun-sun-member-embed-zis9osu"
                title="Checkout frame"
                width="100%"
                height="690px"
                allow="payment *"
                loading="lazy"
                style={{
                  overflow: "hidden",
                }}
                src={getVendorCheckoutUrl()}
              ></iframe>
            </LazyLoad>
          </div>
        </div>
      </div>
      <button
        className="text-[20.8px] font-bold leading-[24px] font-opensans text-[#b5903e] rounded-md transition mt-[16px] mb-[32px] mx-[7.5px] md:my-0  md:mt-[16px] md:mb-[32px] underline"
        onClick={handlePennyOfferClick}
      >
        &nbsp;&nbsp;&nbsp;📰 &nbsp;Our no-risk, one penny per day offer is only
        guaranteed to last a few more hours.&nbsp;&nbsp;📰&nbsp; &nbsp;
      </button>
    </section>
  );
};

export default SubscriptionOptions;
