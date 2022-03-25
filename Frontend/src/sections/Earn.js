import React from "react";
import Arrow from "../assets/arrow.svg";
const Earn = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        How much can I earn?
      </h2>
      <div className="grid md:grid-cols-2 gap-20 py-10 relative">
        <img
          className=" rotate-90 md:rotate-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 md:w-40"
          src={Arrow}
          alt=""
        />
        <div className=" bg-secondary py-24 md:py-16  bg-opacity-60  md:pr-20 text-white  flex items-center">
          <div className="max-w-max mx-auto md:ml-auto text-center md:text-auto">
            <p className="font-bold text-lg uppercase mt-2 ">
              At the end of the year and with
            </p>
            <p className="text-primary font-bold text-6xl my-1">$1,000 USD</p>
            <p className="font-bold">of $TYTAN invested.</p>
          </div>
        </div>
        <div className=" bg-secondary py-14  bg-opacity-60 md:l-20 text-white">
          <div className="max-w-sm mx-auto md:mr-auto text-center md:text-auto">
            <p className=" text-white font-bold text-2xl uppercase">
              You can earn up to
              <br />
              <span className="text-primary">$1,000,000 USD</span> of $TYTAN at
              101,034% APY*.
            </p>
            <p className="text-xs mt-4">
              *Earnings are calculated in a scenario where the SAP sustains the
              rebase interest for 365 days.
            </p>
            <button className="uppercase bg-primary bg-opacity-10 border-2 border-primary  text-primary text-xs py-1.5 rounded-md px-4 mt-8">
              Open App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
