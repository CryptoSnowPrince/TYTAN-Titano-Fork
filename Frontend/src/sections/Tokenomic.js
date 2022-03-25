import React from "react";
import BuyImage from "../assets/buy.svg";
import SellImage from "../assets/sell.svg";
import icon1 from "../assets/tm1.svg";
import icon2 from "../assets/tm2.svg";
import icon3 from "../assets/tm3.svg";
import icon4 from "../assets/tm4.svg";
const Tokenomic = () => {
  const buydata = [
    {
      title: "Automatic LP",
      text: "4% of order fees return to liquidity",
    },
    {
      title: "TYTAN Insurance Fund",
      text: "5% of order fees are stored in TIF",
    },
    {
      title: "Treasury",
      text: "2.5% of order fees go to the treasury",
    },
    {
      title: "Fire Pit",
      text: "2.5% of TYTAN is burnt in the fire",
    },
  ];

  const sellData = [
    {
      title: "Automatic LP",
      text: "4% of order fees return to liquidity",
    },
    {
      title: " TYTAN Insurance Fund",
      text: "5% of order fees are stored in TIF      ",
    },
    {
      title: " Treasury",
      text: "2.5% of order fees go to the treasury",
    },
    {
      title: " SuperNova",
      text: "2.5% of TYTAN is burnt there",
    },
  ];
  return (
    <div className="py-20">
      <div className="container">
        <div className="custom-container">
          <h2 className="text-5xl font-bold text-center">Tokenomics</h2>
          <div className="mt-10 flex  justify-center  items-end">
            <div className="text-right">
              <img src={BuyImage} alt="" className="ml-auto" />
              <p className="text-primary text-4xl mt-6 font-bold mb-8">BUY</p>

              <div>
                {buydata.map((val, i) => (
                  <div className="uppercase font-bold mb-4" key={i}>
                    <p className="text-primary mb-1 text-sm md:text-base">
                      {val.title}
                    </p>
                    <p className="text-white text-xs md:text-base">
                      {val.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 md:px-8 flex-shrink-0">
              {[icon1, icon2, icon3, icon4].map((val, i) => (
                <div className="mb-6 max-w-max " key={i}>
                  <img src={val} alt="" className=" flex-shrink-0" />
                </div>
              ))}
            </div>
            <div>
              <img src={SellImage} alt="" className="mr-auto" />
              <p className="text-red text-4xl mt-6 font-bold mb-8">SELL</p>
              <div>
                {sellData.map((val, i) => (
                  <div className="uppercase font-bold mb-4" key={i}>
                    <p className="text-sm md:text-base text-red mb-1">
                      {val.title}
                    </p>
                    <p className="text-white text-xs md:text-base">
                      {val.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className=" max-w-2xl text-center mt-4 font-bold text-white mx-auto ">
            The Treasury can be used for buybacks in down turns, marketing and
            invest in other projects to help create more value to TYTAN Holders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
