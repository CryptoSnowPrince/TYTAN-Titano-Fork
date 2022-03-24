import React from "react";

const Home = () => {
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

const datalist = [
  {
    text: "TYTAN Price",
    ans: "$171.45",
  },
  {
    text: "Market cap",
    ans: "$75,841,456",
  },
  {
    text: "circulating supply",
    ans: "383,121.65",
  },
  {
    text: "backed liquidity",
    ans: "100%",
  },
  {
    text: "next rebase",
    ans: "00:12:16",
  },
  {
    text: "Average tytan holding",
    ans: "442,330.95",
  },
];

const cardData = [
  {
    title: "tytan",
    price: "$171.45",
    per: "+2.4%",
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
