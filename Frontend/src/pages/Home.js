import React from "react";

import { useTimer } from "./useTimer";
import { formatCurrency, formatNumber } from "./helper";

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Home = ({ data }) => {
  
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
      ans: formatNumber(data.backedLiquidity, 2) + "%",
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
      price: "$1,026,228",
      per: "+2.4%",
    },
    {
      title: "liquidity",
      price: "$12,373,594",
      per: "+2.46%",
    },
    {
      title: "risk-free value",
      price: "$2,903,111",
      per: "+13.75%",
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


