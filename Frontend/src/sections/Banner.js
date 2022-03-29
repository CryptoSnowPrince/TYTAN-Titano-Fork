import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-10 justify-center pt-0 pb-20 md:py-28 items-center gap-x-10">
          <div data-aos="fade-up">
            <h2 className="font-bold text-4xl md:text-5xl text-white max-w-sm mx-auto text-center mb-20 md:mb-0 leading-snug">
              Auto-Staking & Auto-Compounding From the Future
            </h2>
          </div>
          <div data-aos="fade-up" className="text-center md:text-auto">
            <button className="btn text-black block  mx-auto md:mx-0 py-4 px-6 bg-primary uppercase font-semibold rounded-md">
              click here to buy tytan
            </button>
            <button className="btn mx-auto md:mx-0 border-2 border-primary text-primary py-2.5 px-6 block mt-6 rounded-md">
              GO TO THE CHART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
