import React, { createContext, useContext } from "react";
import { useGoogleTracking } from "../utils/useGoogleTracking";

const TrackingContext = createContext();

export const TrackingProvider = ({ children }) => {
  const { trackEvent, trackConversion } = useGoogleTracking();

  return (
    <TrackingContext.Provider value={{ trackEvent, trackConversion }}>
      {children}
    </TrackingContext.Provider>
  );
};

export const useTracking = () => useContext(TrackingContext);
