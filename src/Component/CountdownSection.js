import React, { useState, useEffect } from "react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 28, // Set to match the image
    seconds: 54, // Set to match the image
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Timer has reached zero, stop the countdown
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isScreen = window.innerWidth > 768;

  return (
    <section className="bg-[#a81a31] py-6 text-center text-white">
      <h2 className="text-2xl md:text-[34px] uppercase max-w-[1100px] mx-auto leading-[36px] md:leading-[51px] font-playfair font-normal text-center mb-[8px] p-[16px] md:p-0">
        Start Your Zero-Risk Subscription Trial Today While This Exclusive Offer
        Still Lasts
      </h2>
      <div className="flex justify-center gap-3 md:gap-6">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div
            className="bg-[#EDEDE8] text-black px-0 py-4 md:py-4 md:px-4 rounded-lg"
            style={{ minWidth: isScreen ? "154px" : "40px" }}
          >
            <span className="text-[28px] md:text-[58px] leading-[28px] md:leading-[58px] font-bold block font-playfair">
              {timeLeft.days}
            </span>
          </div>
          <p className="text-xs uppercase mt-2 text-white font-opensans">
            Days
          </p>
        </div>
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div
            className="bg-[#EDEDE8] text-black px-0 py-4 md:py-4 md:px-4 rounded-lg"
            style={{ minWidth: isScreen ? "154px" : "40px" }}
          >
            <span className="text-[28px] md:text-[58px] leading-[28px] md:leading-[58px] font-bold block font-playfair">
              {timeLeft.hours}
            </span>
          </div>
          <p className="text-xs uppercase mt-2 text-white font-opensans">
            Hours
          </p>
        </div>
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div
            className="bg-[#EDEDE8] text-black px-0 py-4 md:py-4 md:px-4 rounded-lg"
            style={{ minWidth: isScreen ? "154px" : "40px" }}
          >
            <span className="text-[28px] md:text-[58px] leading-[28px] md:leading-[58px] font-bold block font-playfair">
              {timeLeft.minutes}
            </span>
          </div>
          <p className="text-xs uppercase mt-2 text-white font-opensans">
            Minutes
          </p>
        </div>
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div
            className="bg-[#EDEDE8] text-black px-0 py-4 md:py-4 md:px-4 rounded-lg"
            style={{ minWidth: isScreen ? "154px" : "40px" }}
          >
            <span className="text-[28px] md:text-[58px] leading-[28px] md:leading-[58px] font-bold block font-playfair">
              {timeLeft.seconds}
            </span>
          </div>
          <p className="text-xs uppercase mt-2 text-white font-opensans">
            Seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
