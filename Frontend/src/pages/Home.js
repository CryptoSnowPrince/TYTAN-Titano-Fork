import React, { useEffect, useState } from "react";
import axios from 'axios';

import { useTimer } from "./useTimer";

const GET_TOKEN_PRICE_API_KEY = "f0ae12cdcd6a8343b90e6b8aa4c20f0dce7a8b4495eb4b93ff4d162256b1a432";

const getTokenPrice = async (symbol) => {
  const api = "https://min-api.cryptocompare.com/data/price?fsym=" + symbol + "&tsyms=USD&api_key=" + GET_TOKEN_PRICE_API_KEY;
  const res = await axios.get(api);
  return res.data.USD;
}

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Home = ({ data }) => {
  const [titanPrice, setTitanPrice] = useState(0);

  useEffect(() => {
    const init = async () => {
      const price = await getTokenPrice("TITAN")
      setTitanPrice(price);
    }
    init();
  }, []);

  const datalist = [
    {
      text: "TYTAN Price",
      ans: "$" + data.marketPrice,
    },
    {
      text: "Market cap",
      ans: "$" + data.marketPrice * data.circulatingSupply,
    },
    {
      text: "circulating supply",
      ans: data.circulatingSupply,
    },
    {
      text: "backed liquidity",
      ans: data.backedLiquidity + "%",
    },
    {
      text: "next rebase",
      ans: NextRebase(),
    },
    {
      text: "Average tytan holding",
      ans: "$" + data.averageHolding,
    },
  ];

  const cardData = [
    {
      title: "tytan",
      price: "$" + data.marketPrice,
      per: data.usd_24h_change + "%",
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
            {/* <div>
              <div className="dashboard-card-chips py-4"></div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


