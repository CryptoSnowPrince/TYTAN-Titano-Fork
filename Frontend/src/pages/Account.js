import React from "react";

import { useTimer } from "./useTimer";

export const NextRebase = () => {
  return useTimer(1800 - (Math.floor(new Date().getTime() / 1000 - 1560) % 1800));
};

const Account = ({ data }) => {
  const accountData = [
    {
      title: "Current TITANO Price",
      result: "$" + data.marketPrice + "USD",
      color: "primary",
    },
    {
      title: "Next Reward Amount",
      result: "0.00 TITANO",
      color: "",
    },
    {
      title: "Next Reward Amount USD",
      result: "$0.00 USD",
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
      result: "$0.00 USD",
      color: "primary",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto uppercase">
      <h2 className="mb-6 font-bold uppercase ">Your Account</h2>
      <div className="  grid grid-cols-1 gap-8 mb-10">
        <div className="bg-dark-400 rounded-xl bg-opacity-40 grid grid-cols-2  px-8 py-8">
          <div>
            <h3 className=" text-lightGray-400 uppercase">Total Earned</h3>
            <p className=" text-primary font-semibold text-5xl my-2">$0.00</p>
            <h3 className="  text-xs uppercase text-white">
              1.71 tytano  <span className="text-primary ">154% </span>
              increase
            </h3>
          </div>
          <div>
            <h3 className=" text-lightGray-400 uppercase">apy</h3>
            <p className=" text-primary font-semibold text-5xl my-2">
              101,034%
            </p>
            <h3 className=" text-xs text-white">0.00 TITANO (0% increase)</h3>
          </div>
        </div>
        <div className=" grid  grid-cols-1 sm:grid-cols-3 gap-x-6 text-center">
          <div className="p-6 bg-dark-400 rounded-xl bg-opacity-40 ">
            <p className=" text-lightGray-400 uppercase text-sm">
              your balance
            </p>
            <p className="text-2xl font-semibold my-1 text-primary">
              ${(new Intl.NumberFormat("en-US").format(data.balance))}
            </p>
            <p className=" text-white ">1.71 tytan</p>
          </div>
          <div className="bg-dark-400 rounded-xl bg-opacity-40  p-6">
            <p className=" text-lightGray-400 uppercase text-sm">
              your earnings (daily)
            </p>
            <p className="text-2xl text-primary font-bold my-1">$113.56</p>
            <p className=" text-white ">0.0000561 tytan</p>
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
