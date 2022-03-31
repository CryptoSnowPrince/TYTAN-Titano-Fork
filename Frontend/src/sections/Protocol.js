import React from "react";

const Protocol = () => {
  return (
    <div className="py-20">
      <div className="md:container">
        <div className="custom-container ">
          <h2
            data-aos="fade-up"
            className=" text-3xl md:text-5xl font-bold text-center "
          >
            Auto-Staking Protocol
          </h2>

          <div className="grid md:grid-cols-2 pt-10 gap-8">
            <div data-aos="fade-right">
              <div className="bg-dark-500  max-w-md mx-auto p-6 py-12 rounded-md text-center">
                <p className="text-primary font-bold text-6xl">100,000%</p>
                <p className="font-bold text-xl uppercase mt-4">
                  Fixed Staking APY
                </p>

                <div className="mt-10 w-36 mx-auto">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0xba96731324de188ebc1ed87ca74544ddebc07d7f" target={"_blank"} rel="noreferrer"><button className="font-bold w-full border-2 text-sm border-white py-2.5 px-8 rounded-lg block mx-auto">
                    AUDIT
                  </button>
                  </a>
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0xba96731324de188ebc1ed87ca74544ddebc07d7f" target={"_blank"} rel="noreferrer"><button className="font-bold w-full border-2 text-sm border-primary block mx-auto mt-4 py-2.5 px-4 rounded-lg">
                    WHITEPAPER
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="text-center md:text-auto mt-4 "
            >
              <h3 className=" uppercase text-primary mb-10 text-2xl font-bold md:hidden">
                about us
              </h3>
              <div className="px-10 md:px-0">
                <p className=" text-base font-bold md:font-normal md:text-xl leading-relaxed mb-6">
                  <span className="font-bold">TYTAN</span> provides a
                  decentralized financial asset which rewards users with a
                  sustainable fixed compound interest model through use of it’s
                  unique TYTAN protocol.
                </p>
                <p className=" text-base font-bold md:font-normal md:text-xl leading-relaxed mt-16">
                  {" "}
                  <span className="font-bold">TYTAN</span> delivers the
                  industry’s highest fixed APY, paid every 30 minutes, and a
                  simple buy-hold-earn system that grows your $TYTAN portfolio
                  in your wallet at a lightning fast pace.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className=" bg-dark-600  md:bg-transparent py-6 md:py-0 mt-20"
          >
            <a href="https://bscscan.com/address/0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90" target={"_blank"} rel="noreferrer"><p className="uppercase text-primary text-center  mb-6 font-bold text-xl break-words">
              <span className="text-white">tytan Contract:</span>{" "}
              <span className=" underline text-sm md:text-xl font-bold">
                0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90
              </span>
            </p>
            </a>
          </div>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xba96731324de188ebc1ed87ca74544ddebc07d7f" target={"_blank"} rel="noreferrer"><button
            data-aos="fade-up"
            className="btn text-black py-4 px-6 mt-10 mx-auto block bg-primary uppercase font-semibold rounded-md"
          >
            click here to buy tytan
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
