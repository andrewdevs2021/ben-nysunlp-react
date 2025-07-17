export const useGoogleTracking = () => {
  const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
  };

  const trackConversion = (conversionId, label = "", value = 0) => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: `AW-16783381103/${label}`,
        value: value,
        currency: "USD",
        transaction_id: "",
      });
    }
  };

  return { trackEvent, trackConversion };
};
