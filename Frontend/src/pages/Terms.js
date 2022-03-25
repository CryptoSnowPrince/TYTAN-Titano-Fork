import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/mainHeader";
import { FiChevronLeft } from "react-icons/fi";
const Terms = () => {
  return (
    <div>
      <Header />
      <div className="container pb-20">
        <h1 className="text-5xl font-bold mt-10 md:mt-20">Glossary of Terms</h1>
        <Link to="/" className="flex items-center text-xl font-bold mt-4">
          {" "}
          <span>
            <FiChevronLeft />
          </span>{" "}
          <span className="">Back</span>{" "}
        </Link>

        <div className="border border-white mt-6">
          <div className="bg-white bg-opacity-20 grid grid-cols-6 ">
            <div className=" col-span-2 p-2.5 pl-6 text-white font-bold text-xl uppercase border-r-2 border-white">
              term
            </div>
            <div className=" col-span-4 p-2.5 pl-6 text-white font-bold text-xl uppercase">
              meaning
            </div>
          </div>
        </div>
        {list.map((val, i) => (
          <div key={i} className="border border-white border-t-0">
            <div className="bg-dark-400 bg-opacity-10 grid grid-cols-6 ">
              <div className=" break-words col-span-2 p-2.5 pl-6 text-white font-bold text-base uppercase border-r border-white">
                {val.term}
              </div>
              <div className=" col-span-4 p-2.5 pl-6 text-white font-bold text-base uppercase">
                {val.mean}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;

const list = [
  {
    term: "apR",
    mean: "Refers to the simple returns in USD value relative to your staked TYTAN or TYSHARE. ",
  },
  {
    term: "apy",
    mean: "Annual percentage yield (APY) is the rate of return gained over the course of a year on a specific investment. Compounding interest, which is computed on a regular basis and applied to the amount.",
  },
  {
    term: "APEING (TO APE)",
    mean: "Not added yet",
  },
  {
    term: "audit",
    mean: "An audit is a process where developers inspect the underlying code and/or algorithm that compose systems and applications.",
  },
  {
    term: "BAG",
    mean: "Apeing is when a cryptocurrency trader buys a token shortly after the token project launch without conducting thorough research.",
  },
  {
    term: "BONDS",
    mean: "Bonds are unique tokens that can be utilized to help stabilize the SUBZERO price around peg by reducing circulating supply of SUBZERO if the TWAP goes below peg.",
  },
  {
    term: "BOTS",
    mean: "Automated software that can carry out tasks such as cryptocurrency trades.",
  },
  {
    term: "CIRCULATING SUPPLY",
    mean: "The best approximation of the number of coins that are circulating in the market and in the general public's hands",
  },
  {
    term: "CROSS-CHAIN",
    mean: "Cross-chain is the interconnection between blockchain networks by allowing the exchange of information and value.",
  },
  {
    term: "DAPP",
    mean: "A Decentralised APPlication / decentralised web app. ",
  },
  {
    term: "DEX",
    mean: "A peer-to-peer exchange allowing users to trade cryptocurrency without an intermediary",
  },
  {
    term: "EPOCH",
    mean: "Inside a blockchain network, an epoch is considered a specific period of time. In our case an Epoch is 6 hours long. ",
  },
  {
    term: "THE farm",
    mean: "The Farm is the DeFi App, where you stake your TYTAN Token or LPs (Liquidity Pool tokens).",
  },
  {
    term: "IL (Impermanent loss)",
    mean: "Impermanent loss is when a liquidity provider has a temporary loss of funds because of volatility in a trading pair. You can calculate it.",
  },
  {
    term: "LP / liquidity pool",
    mean: "Liquidity pools are crypto assets that are kept to facilitate the trading of trading pairs on decentralized exchanges. They usually pay a reward for being a Liquidity provider.",
  },
  {
    term: "liquidity provider",
    mean: "Liquidity providers are decentralized exchange users who fund a liquidity pool with tokens they own.",
  },
  {
    term: "peg",
    mean: "A peg refers to the specific price or token that we are aiming to stay at.",
  },
  {
    term: "whale",
    mean: "A term used to describe investors who have uncommonly large amounts of crypto, especially those with enough funds to manipulate the market.",
  },
  {
    term: "when lambooooo?",
    mean: "A phrase referring to when cryptocurrency holders will become rich enough to afford the purchase of a Lamborghini",
  },
  {
    term: "yield farming",
    mean: "Yield farming involves earning interest by investing crypto in decentralized finance markets.",
  },
];
