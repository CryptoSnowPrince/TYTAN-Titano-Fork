import React, { useState, useEffect, useCallback } from "react";
import Slider from "@mui/material/Slider";

const Calculator = ({ marketPrice, titanoBalance, calculatorData }) => {
  const [titanoAmount, setTitanoAmount] = useState(0);
  const [rewardYield, setRewardYield] = useState(102483.58);
  const [priceAtPurchase, setPriceAtPurchase] = useState(0);
  const [futureMarketPrice, setFutureMarketPrice] = useState(0);
  const [days, setDays] = useState(30);

  const [rewardsEstimation, setRewardsEstimation] = useState(0);
  const [potentialReturn, setPotentialReturn] = useState(0);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const calcCurrentWealth = () => {
    return titanoAmount * marketPrice;
  };

  const calcNewBalance = useCallback(() => {
    let balance = titanoAmount;
    for (let i = 0; i < days; i++) {
      balance += balance * 0.018999;
    }
    return balance;
  }, [titanoAmount, days]);

  useEffect(() => {
    setTitanoAmount(parseFloat((titanoBalance * 1.0).toFixed(2)));
    setPriceAtPurchase(marketPrice);
    setFutureMarketPrice(marketPrice);
  }, [titanoBalance, marketPrice]);

  useEffect(() => {
    setInitialInvestment(titanoAmount * priceAtPurchase);
  }, [titanoAmount, priceAtPurchase]);

  useEffect(() => {
    const newBalance = calcNewBalance();
    setRewardsEstimation(newBalance);
    const newPotentialReturn = newBalance * futureMarketPrice;
    setPotentialReturn(newPotentialReturn);
  }, [days, futureMarketPrice, titanoAmount, calcNewBalance]);

  const topList = [
    {
      title: "TITANO Price",
      result: "$" + marketPrice.toFixed(5),
    },
    {
      title: "APY:",
      result: (new Intl.NumberFormat("en-US").format(rewardYield)) + "%",
    },
    {
      title: "Your TITANO Balance",
      result: (titanoAmount || 0).toFixed(2) + " TITANO",
    },
  ];

  const dataList = [
    {
      title: "current wealth",
      result: "$" + calcCurrentWealth().toFixed(2) + " Usd",
    },
    {
      title: "titano rewards estimation",
      result: rewardsEstimation.toFixed(2) + " tytan",
    },
    {
      title: "your initial investment",
      result: "$" + initialInvestment.toFixed(2) + " Usd",
    },
    {
      title: "potential return",
      result: "$" + potentialReturn.toFixed(2) + " Usd",
    },
    {
      title: "potential number of space travels ",
      result: Math.floor(Number(potentialReturn) / 220000),
    },
  ];

  return (
    <div className="">
      <div className=" max-w-4xl w-full mx-auto ">
        <h2 className="font-bold text-xl">Calculator</h2>
        {/* <p className="text-xs font-medium">Estimate your returns</p> */}
        <div className="my-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {topList.map((val, i) => (
              <div
                key={i}
                className="px-4 py-6 md:p-6 md:px-8 bg-dark-400 rounded-xl bg-opacity-40 text-center"
              >
                <p className=" text-lightGray-400 text-xl">{val.title}</p>
                <p className="font-bold text-primary text-2xl mt-1">
                  {val.result}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-dark-400 rounded-xl bg-opacity-40 px-4 py-6 md:p-6 md:px-8">
          <div className=" grid md:grid-cols-2 mt-4 gap-10">
            <div>
              <label htmlFor="amount" className="font-medium">
                TITANO Amount
              </label>
              <div className=" rounded-lg border mt-1 border-white overflow-hidden flex flex-wrap items-center w-full">
                <input
                  className="bg-transparent py-2 px-4 h-full w-10 sm:w-auto flex-1 focus:outline-none"
                  type="number"
                  value={titanoAmount}
                  onChange={e => setTitanoAmount(parseFloat(e.target.value))}
                  placeholder={0}
                  id="amount"
                />
                <p style={{ cursor: "pointer" }} onClick={() => setTitanoAmount(Number((titanoBalance * 1.0).toFixed(2)))} className="p-1 px-2 font-medium text-lg">Max</p>
              </div>
            </div>
            <div>
              <label htmlFor="apy" className="font-medium">
                APY (%)
              </label>
              <div className=" rounded-lg border mt-1 border-white overflow-hidden flex flex-wrap items-center w-full">
                <input disabled
                  className="bg-transparent py-2 px-4 h-full w-10 sm:w-auto flex-1 focus:outline-none"
                  type="number"
                  value={rewardYield}
                  onChange={e => setRewardYield(parseFloat(e.target.value))}
                  placeholder={0}
                  id="apy"
                />
                <p style={{ cursor: "pointer" }} onClick={() => setRewardYield(rewardYield)} className="p-1 px-2 font-medium text-lg">Current</p>
              </div>
            </div>
            <div>
              <label htmlFor="purchasePrice" className="font-medium">
                TITANO price at purchase ($)
              </label>
              <div className=" rounded-lg border mt-1 border-white overflow-hidden flex flex-wrap items-center w-full">
                <input
                  className="bg-transparent py-2 px-4 h-full w-10 sm:w-auto flex-1 focus:outline-none"
                  type="number"
                  value={priceAtPurchase}
                  onChange={e => setPriceAtPurchase(parseFloat(e.target.value))}
                  placeholder={0}
                  id="purchasePrice"
                />
                <p style={{ cursor: "pointer" }} onClick={() => setPriceAtPurchase(marketPrice)} className="p-1 px-2 font-medium text-lg">Current</p>
              </div>
            </div>
            <div>
              <label htmlFor="futurePrice" className="font-medium">
                Future TITANO price ($)
              </label>
              <div className=" rounded-lg border mt-1 border-white overflow-hidden flex flex-wrap items-center w-full">
                <input
                  className="bg-transparent py-2 px-4 h-full w-10 sm:w-auto flex-1 focus:outline-none"
                  type="number"
                  value={futureMarketPrice}
                  onChange={e => setFutureMarketPrice(parseFloat(e.target.value))}
                  placeholder={0}
                  id="futurePrice"
                />
                <p style={{ cursor: "pointer" }} onClick={() => setFutureMarketPrice(marketPrice)} className="p-1 px-2 font-medium text-lg">Current</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p>{`${days} day${days > 1 ? "s" : ""}`}</p>
            <Slider
              min={1}
              value={days}
              onChange={(e) => setDays(e.target.value)}
              max={365}
              defaultValue={30}
            />
          </div>
          <div className="mt-10 grid grid-cols-1 uppercase md:grid-cols-2 gap-x-20 gap-y-4">
            {dataList.map((val, i) => (
              <div
                className=" mb-2 flex items-center justify-between font-medium"
                key={i}
              >
                <div className=" text-white ">{val.title}</div>
                <div className=" text-primary ">{val.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Calculator;


