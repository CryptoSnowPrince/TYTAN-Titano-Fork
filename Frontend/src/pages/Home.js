import React from "react";

import { useTimer } from "./useTimer";
import { formatCurrency, formatNumber } from "./helper";

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Home = ({ data }) => {
  const RFV_Per = formatNumber((data.treasuryRFV - data.pastRFV) / data.pastRFV, 2);
  const Treasury_Per = formatNumber((data.treasury - data.pastTreasury) / data.pastTreasury, 2);
  const Pair_Per = formatNumber((data.pair - data.pastPair) / data.pastPair, 2);

  const datalist = [
    {
      text: "TYTAN Price",
      ans: formatCurrency(data.marketPrice, 4),
    },
    {
      text: "Market cap",
      ans: formatCurrency(data.marketPrice * data.circulatingSupply, 2),
    },
    {
      text: "circulating supply",
      ans: formatCurrency(data.circulatingSupply),
    },
    {
      text: "backed liquidity",
      ans: (isNaN(data.backedLiquidity) ? "0": formatNumber(data.backedLiquidity, 2)) + "%",
    },
    {
      text: "next rebase",
      ans: NextRebase(),
    },
    {
      text: "Average tytan holding",
      ans: "$" + formatNumber(data.averageHolding, 2),
    },
  ];

  const cardData = [
    {
      title: "tytan",
      price: formatCurrency(data.marketPrice, 4),
      per: (data.usd_24h_change < 0 ? "" : "+") + formatNumber(data.usd_24h_change, 2) + "%",
    },
    {
      title: "market value of treasury assets",
      price: isNaN(data.treasury) ? "$0.00" : formatCurrency(data.treasury, 2),
      per: (isNaN(Treasury_Per) ? "0" : Treasury_Per) + "%",
    },
    {
      title: "liquidity",
      price: isNaN(data.pair) ? "$0.00" : formatCurrency(data.pair, 2),
      per: (isNaN(Pair_Per) ? "0" : Pair_Per) + "%",
    },
    {
      title: "risk-free value",
      price: isNaN(data.treasuryRFV) ? "$0.00" : formatCurrency(data.treasuryRFV, 2),
      per: (isNaN(RFV_Per) ? "0" : RFV_Per) + "%",
    },
  ];

  return (
    <div className="md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" bg-dark-400 rounded-xl bg-opacity-50 md:col-span-2">
          <div className="text-center p-4 py-8 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 text-base">
            {datalist.map((val, i) => (
              <div key={i}>
                <p className=" text-lightGray-400 text-sm uppercase">
                  {val.text}
                </p>
                <p className=" font-bold text-3xl text-primary">{val.ans}</p>
              </div>
            ))}
          </div>
        </div>
        {cardData.map((val, i) => (
          <div className="bg-dark-400 rounded-xl bg-opacity-50   p-8" key={i}>
            <div className="text-center">
              <p className=" text-lightGray-400 text-sm uppercase mb-3">
                {val.title}
              </p>
              <p className=" text-2xl font-bold">
                <span className="text-primary">{val.price}</span>{" "}
                <span className="text-xl font-normal"> {val.per}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


