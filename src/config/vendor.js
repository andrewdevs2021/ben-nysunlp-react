export const VENDOR_CONFIGS = {
  obs: {
    id: "obs",
    checkoutPrefix: "penny-a-day-obs",
  },
  sb: {
    id: "sb",
    checkoutPrefix: "penny-a-day-sb",
  },
  imp: {
    id: "imp",
    checkoutPrefix: "penny-a-day-imp",
  },
  lpb: {
    id: "lpb",
    checkoutPrefix: "penny-a-day-lpb",
  },
  vmp: {
    id: "vmp",
    checkoutPrefix: "penny-a-day-vmp",
  },
  npa: {
    id: "npa",
    checkoutPrefix: "penny-a-day-npa",
  },
  ae: {
    id: "ae",
    checkoutPrefix: "penny-a-day-new-ae",
  },
  "30d-trial": {
    id: "30d-trial",
    checkoutPrefix: "penny-a-day-30d-trial",
  },
  sd: {
    id: "sd",
    checkoutPrefix: "penny-a-day-sd",
  },
};

export const VENDOR_PARAMS = {
  "penny-a-day-sb": {
    vendor_name: "SB",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-obs": {
    vendor_name: "OBS",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-imp": {
    vendor_name: "IMP",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-lpb": {
    vendor_name: "LPB",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-vmp": {
    vendor_name: "VMP",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-npa": {
    vendor_name: "NPA",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-new-ae": {
    vendor_name: "AE",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-30d-trial": {
    vendor_name: "30D",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
  "penny-a-day-sd": {
    vendor_name: "SD",
    vendor_campaign: "NYSvNYT",
    creative: "",
  },
};

export const UTM_PARAMS = {
  "penny-a-day-sb": {
    utm_source: "SB",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-obs": {
    utm_source: "OBS",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-imp": {
    utm_source: "IMP",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-lpb": {
    utm_source: "LPB",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-vmp": {
    utm_source: "VMP",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-npa": {
    utm_source: "NPA",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-new-ae": {
    utm_source: "AE",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-30d-trial": {
    utm_source: "30D",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
  "penny-a-day-sd": {
    utm_source: "SD",
    utm_medium: "sms-rental",
    utm_campaign: "NYSvNYT",
    utm_content: "",
  },
};

export const getVendorFromPath = () => {
  const path = window.location.pathname;
  const vendorPath = path.split("/").pop(); // Gets the last part of the URL

  // Extract vendor ID from the penny-a-day-{vendorId} format
  const vendorId = vendorPath.replace("penny-a-day-", "");

  return VENDOR_CONFIGS[vendorId] || VENDOR_CONFIGS["obs"]; // Default to 'obs' if no match
};
