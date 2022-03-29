import React from "react";
import Tick from "../assets/tick.svg";
import Tokenomic from "./Tokenomic";
import Competetive from "./Competetive";
import Faq from "./Faq";

const Liquidity = () => {
  const data = [
    "Automatic injection of liquidity from a hard-coded function every 48 hours!",
    "No manual override ability to pause or stop liquidity from being added.",
    "Allows for complete APY sustainability until maximum supply is reached.",
  ];

  return (
    <section className="liquidity py-20 text-white">
      <div className="px-10 sm:container">
        <div className="custom-container md:px-10">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-5xl font-bold text-center"
          >
            TYTAN Auto-Liquidity _ v1 (TAL1)
          </h2>
          <p
            data-aos="fade-up"
            className="font-bold leading-relaxed text-base sm:text-lg mt-10"
          >
            Every 48 hours at 22:52:48 UTC time our TYTAN Auto-Liquidity Engine
            (TALE) will inject automatic liquidity into the market. On each buy
            or sell order there is a 4% tax fee that automatically gets stored
            into an Auto-LP wallet and built into our protocol’s smart contract
            is the mechanism which smartly takes the 50% of the amount of TYTAN
            stored in the wallet, and will automatically buy BNB at the current
            market price.
            <br />
            <br />
            The remaining 50% of TYTAN in the Auto-LP wallet will be used for
            the TYTAN side of liquidity, therefore giving equal an 50/50
            weighting of TYTAN/BNB which will then be automatically added as
            new, additional liquidity into the market pair and raising the
            amount of liquidity in the pool.
          </p>
          <em data-aos="fade-up" className="my-8 block text-sm ">
            MAR 17, 2022: Please note the above wording has been corrected with
            the addition of the 22:52:48 timestamp.
          </em>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <p
              data-aos="fade-right"
              className="font-bold leading-relaxed text-base text-white "
            >
              The TALE will do this every 48 hours by adding more and more
              liquidity to the pool which will allow $TYTAN token holders to
              easily sell their tokens at anytime with little to no market
              slippage. It will also aid in maintaining protocol stability to
              make sure the APY is upheld for the entire life of TYTAN.
            </p>
            <div data-aos="fade-left">
              {data.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="grid grid-flow-col justify-start items-center gap-x-4 pb-6"
                  >
                    <img src={Tick} alt="" className="w-8" />
                    <p className="font-bold leading-normal">{val}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Tokenomic />
      <Competetive />
      <Faq />
      <div style={{ height: "100vh" }}></div>
    </section>
  );
};

export default Liquidity;
