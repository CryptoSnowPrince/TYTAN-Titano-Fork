import React from "react";

const Protocol = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="custom-container ">
          <h2 className=" text-4xl md:text-5xl font-bold text-center ">
            Auto-Staking Protocol
          </h2>

          <div className="grid md:grid-cols-2 pt-10 gap-8">
            <div>
              <div className="bg-dark-500  max-w-md mx-auto p-6 py-12 rounded-md text-center">
                <p className="text-primary font-bold text-5xl">101,034%</p>
                <p className="font-bold text-lg uppercase mt-2">
                  Fixed Staking APY
                </p>

                <div className="mt-10">
                  <button className="font-bold border-2 text-sm border-white py-2 px-8 rounded-lg block mx-auto">
                    AUDIT
                  </button>
                  <button className="font-bold border-2 text-sm border-primary block mx-auto mt-4 py-2 px-4 rounded-lg">
                    WHITEPAPER
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center md:text-auto">
              <p className=" text-xl leading-relaxed mb-6">
                <span className="font-bold">TYTAN</span> provides a
                decentralized financial asset which rewards users with a
                sustainable fixed compound interest model through use of it’s
                unique TYTAN protocol.
              </p>
              <p className="text-xl leading-relaxed mt-16">
                {" "}
                <span className="font-bold">TYTAN</span> delivers the industry’s
                highest fixed APY, paid every 30 minutes, and a simple
                buy-hold-earn system that grows your $TYTAN portfolio in your
                wallet at a lightning fast pace.
              </p>
            </div>
          </div>

          <p className="uppercase text-primary text-center mt-28 mb-6 font-bold text-xl break-words">
            <span className="text-white">tytan Contract:</span>{" "}
            0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90
          </p>
          <button className="text-black py-4 px-6 mx-auto block bg-primary uppercase font-semibold rounded-md">
            click here to buy tytan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
