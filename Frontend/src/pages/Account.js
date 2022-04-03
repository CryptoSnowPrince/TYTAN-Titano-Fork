import React from "react";

import { useTimer } from "./useTimer";
import { formatCurrency, formatNumber } from "./helper";
import config from "../contract/config";

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Account = ({ data }) => {

  const apy = (new Intl.NumberFormat("en-US").format(config.APY)) + "%";
  const daily = (new Intl.NumberFormat("en-US").format(config.DAILY)) + "% DAILY";

  const earnedTokenAmount = () => {
    if (typeof data.balance !== typeof 0) {
      return 0;
    }
    if (typeof data.reflected !== typeof 0) {
      return 0;
    }
    return Math.abs(data.balance - data.reflected);
  }

  const accountData = [
    {
      title: "Current TITANO Price",
      result: "$" + formatNumber(data.marketPrice, 4) + " USD",
      color: "primary",
    },
    {
      title: "Next Reward Amount",
      result: formatNumber(data.balance * 0.0003958125, 2) + " TITANO",
      color: "",
    },
    {
      title: "Next Reward Amount USD",
      result: formatCurrency(data.balance * data.marketPrice * 0.0003958125, 2) + " USD",
      color: "primary",
    },
    {
      title: "Next Reward Yield",
      result: "0.03958%",
      color: "",
    },
    {
      title: "ROI (30-Day Rate)",
      result: "76.80%",
      color: "primary",
    },
    {
      title: "ROI (30-Day Rate) USD",
      result: formatCurrency(data.balance * data.marketPrice * 0.7680146, 2) + " USD",
      color: "primary",
    },
  ];

  return (
    <div className="mx-auto uppercase">
      <h2 className="mb-6 font-bold uppercase ">Your Account</h2>
      <div className="  grid grid-cols-1 gap-8 mb-10">
        <div className="bg-dark-400 rounded-xl bg-opacity-40 grid grid-cols-2  px-8 py-8">
          <div>
            <h3 className=" text-lightGray-400 uppercase">Total Earned</h3>
            <p className=" text-primary font-semibold text-5xl my-2">
              {formatCurrency(earnedTokenAmount() * data.marketPrice, 2)}
            </p>
            <h3 className="  text-xs uppercase text-white">
              {formatNumber(earnedTokenAmount(), 2)} tytano
              <span className="text-primary ">
                {formatNumber((earnedTokenAmount() / data.balance) * 100, 2)}%
              </span>
              increase
            </h3>
          </div>
          <div>
            <h3 className=" text-lightGray-400 uppercase">apy</h3>
            <p className=" text-primary font-semibold text-5xl my-2">
              {apy}
            </p>
            <h3 className=" text-xs text-white">{daily}</h3>
          </div>
        </div>
        <div className=" grid  grid-cols-1 sm:grid-cols-3 gap-x-6 text-center">
          <div className="p-6 bg-dark-400 rounded-xl bg-opacity-40 ">
            <p className=" text-lightGray-400 uppercase text-sm">
              your balance
            </p>
            <p className="text-2xl font-semibold my-1 text-primary">
              {formatCurrency(data.balance * data.marketPrice, 2)}
            </p>
            <p className=" text-white ">{formatNumber(data.balance, 2)} tytan</p>
          </div>
          <div className="bg-dark-400 rounded-xl bg-opacity-40  p-6">
            <p className=" text-lightGray-400 uppercase text-sm">
              your earnings (daily)
            </p>
            <p className="text-2xl text-primary font-bold my-1">{formatCurrency(data.marketPrice * data.balance * 0.019176, 2)}</p>
            <p className=" text-white ">{formatNumber(data.balance * config.DAILY / 100, 2)} tytan</p>
          </div>
          <div className="bg-dark-400 rounded-xl bg-opacity-40  p-6">
            <p className=" text-lightGray-400 uppercase text-sm">next rebase</p>
            <p className="text-2xl text-primary font-bold my-1">{NextRebase()}</p>
            {/* <p className=" text-lightGray-400 ">0.00 TITANO</p> */}
          </div>
        </div>

        <div className="bg-dark-400 rounded-xl uppercase bg-opacity-40 px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {accountData.map((val, i) => (
            <div
              className="flex justify-between items-center text-sm sm:text-base"
              key={i}
            >
              <p className=" text-white font-semibold">{val.title}</p>
              {/* <span>{"//"}</span> */}
              <p className={`${val.color === "primary" && "text-primary"}`}>
                {val.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
