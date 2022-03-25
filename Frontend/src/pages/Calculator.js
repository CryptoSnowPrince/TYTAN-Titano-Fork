import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Calculator = () => {
  const [value, setValue] = useState(45);

  const topList = [
    {
      title: "TITANO Price",
      result: "$0.198571",
    },
    {
      title: "APY:",
      result: "102,483.58%",
    },
    {
      title: "Your TITANO Balance",
      result: "0.00 TITANO",
    },
  ];

  const dataList = [
    {
      title: "current wealth",
      result: "  $0.1860 Usd",
    },
    {
      title: "titano rewards estimation",
      result: "    1.31415 tytan",
    },
    {
      title: "your initial investment",
      result: "     $0.1860 Usd",
    },
    {
      title: "potential return",
      result: "    $2110.02",
    },
    {
      title: "potential number of space travels ",
      result: "5",
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
            <CustomInput />
            <CustomInput label="APY (%)" andormentTxt="Current" />
            <CustomInput
              label="TITANO price at purchase ($)"
              andormentTxt="Current"
            />
            <CustomInput
              label="Future TITANO price ($)"
              andormentTxt="Current"
            />
          </div>
          <div className="mt-10">
            <p>{value} days</p>
            <Slider
              min={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
                <p>{"//"}</p>
                <div className=" text-primary ">{val.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

const CustomInput = ({
  label = "TITANO Amount",
  placeholder = "0",
  andormentTxt = "Max",
}) => {
  return (
    <div>
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <div className=" rounded-lg border mt-1 border-white overflow-hidden flex flex-wrap items-center w-full">
        <input
          className="bg-transparent py-2 px-4 h-full w-10 sm:w-auto flex-1 focus:outline-none"
          type="text"
          placeholder={placeholder}
        />
        <p className="p-1 px-2 font-medium text-lg">{andormentTxt}</p>
      </div>
    </div>
  );
};
