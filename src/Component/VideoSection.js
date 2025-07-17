import LazyLoad from "react-lazyload";

const VideoSection = () => {
  // Handler for when the video starts playing
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="text-center text-[#b5903e] px-4 py-8 sm:px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[26px] md:text-[37px] font-normal mb-4 leading-[36px] font-playfair">
          A Message from the Publisher of The New York Sun
        </h2>

        <div className="relative max-w-[1100px] mx-auto md:mb-6 video-section">
          <LazyLoad>
            <iframe
              src="//fast.wistia.net/embed/iframe/0jlmb05hrf?seo=true&videoFoam=false"
              title="video title "
              allow="autoplay; fullscreen"
              // allowtransparency="true"
              msallowfullscreen="true"
              frameBorder="0"
              className="wistia_embed"
              name="wistia_embed"
              // msallowfullscreen
              width="640"
              height="360"
              loading="lazy"
            ></iframe>
          </LazyLoad>
        </div>

        <button
          className="w-full sm:w-auto mt-6 rounded-lg px-8 py-3 text-lg bg-[#a81a31] text-white transition-all duration-300 shadow-lg border-t-[1px] border-r-[1px] border-b-[4px] border-l-[1px] border-black font-playfair leading-[33px]"
          type="button"
          aria-label="Subscribe Now"
          onClick={scrollToTop}
        >
          <span className="font-semibold text-[22px] ">
            TAKE BACK <br className="sm:block md:hidden" /> JOURNALISM.
            <br className="sm:block md:hidden" /> SUBSCRIBE TODAY{" "}
          </span>
          &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
