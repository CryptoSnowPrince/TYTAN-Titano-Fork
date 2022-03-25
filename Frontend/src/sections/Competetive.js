import React from "react";
import tick from "../assets/tick2.svg";
import cross from "../assets/cross.svg";
const Competetive = () => {
  const data = [
    {
      feature: "APY",
      tytan: "101,034%",
      titano: "102,483.58%",
      libero: "158,893.59%",
      icon: false,
    },
    {
      feature: "Fees",
      tytan: "14% / 16%",
      titano: "13% / 18%",
      libero: "15% / 25%",
      icon: false,
    },
    {
      feature: "Automatic Burn",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Sustainable Rebasing",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Insurance Fund",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Liquidity",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Staking",
      tytan: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Fees Hard Coded",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Auto-Staking Hard Coded",
      tytan: "YES",
      titano: "No",
      libero: "No",
      icon: true,
    },
    {
      feature: "Rug-Proof: No Minting Code",
      tytan: "YES",
      titano: "No",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Rug-Proof: No Manual",
      tytan: "YES",
      titano: "No",
      libero: "NO",
      icon: true,
    },
    {
      feature: "Adjusting",
      tytan: "YES",
      titano: "YES",
      libero: "NO",
      icon: true,
    },
    {
      feature: "Rug-Proof: Fixed Rebase Time",
      tytan: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
    {
      feature: "Rug-Proof: Liquidity Locked",
      tytan: "YES",
      titano: "YES",
      libero: "YES",
      icon: true,
    },
  ];

  return (
    <div className="py-20">
      <div className="container">
        <div className="custom-container">
          <h2 className="text-5xl font-bold text-center">
            Competitive Advantages
          </h2>
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: 800 }}>
              <div className="grid grid-cols-12 mt-10">
                <div className="col-span-4">
                  <p className="text-4xl font-bold mb-6">Features</p>
                </div>
                <div className="col-span-8 grid grid-cols-3">
                  <div>
                    <p className="text-4xl font-bold mb-6">Tytan</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-6">Titano</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-6">Libero</p>
                  </div>
                </div>
              </div>
              <div>
                {data.map((val, i) => (
                  <div className="grid grid-cols-12 mb-2 gap-8" key={i}>
                    <div className=" col-span-4">
                      <p className="text-lg font-bold leading-relaxed">
                        {val.feature}
                      </p>
                    </div>
                    <div className="col-span-8 grid grid-cols-3">
                      <div className=" ">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.tytan === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          {val.tytan}
                        </p>
                      </div>
                      <div className="">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.titano === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          <span className="uppercase">{val.titano}</span>
                        </p>
                      </div>
                      <div className="">
                        <p className=" font-bold leading-relaxed grid grid-flow-col items-center justify-start gap-x-2">
                          {val.icon && (
                            <span>
                              <img
                                src={val.libero === "YES" ? tick : cross}
                                alt=""
                              />
                            </span>
                          )}
                          <span className="uppercase">{val.libero}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competetive;
