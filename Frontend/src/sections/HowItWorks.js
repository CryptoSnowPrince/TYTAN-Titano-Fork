/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "../assets/how_it_works.svg";
import { FaDiscord } from "react-icons/fa";
import icon1 from "../assets/how_it_works/1.png";
import icon2 from "../assets/how_it_works/2.png";
import icon3 from "../assets/how_it_works/3.png";
import icon4 from "../assets/how_it_works/4.png";
import icon5 from "../assets/how_it_works/5.png";
const HowItWorks = () => {
  const datalist = [
    {
      icon: icon1,
      text: "$SAFUU is the native token which interest rebase rewards are paid. Every token holder automatically receives 0.02355% interest every 15 minutes just for holding $SAFUU tokens in their own wallet!",
    },
    {
      icon: icon2,
      text: "Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 382,945%. Interest rewards are compounded every 15 minutes for every BSC wallet holding any $SAFUU tokens.",
    },
    {
      icon: icon3,
      text: "The SIF serves as an insurance fund to achieve price stability and longterm sustainability of the Safuu Protocol by maintaining a consistent 0.02355% rebase rate paid to all $SAFUU token holders.",
    },
    {
      icon: icon4,
      text: "The Treasury provides support to the SIF in the event of an extreme price drop in the $SAFUU token. The Treasury also funds investments, new Safuu projects and marketing for Safuu.",
    },
    {
      icon: icon5,
      text: "The Treasury provides support to the SIF in the event of an extreme price drop in the $SAFUU token. The Treasury also funds investments, new Safuu projects and marketing for Safuu.",
    },
  ];

  return (
    <div className="py-10 md:py-20 ">
      <div className="px-10 sm:container">
        <div className="custom-container">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-center mb-10"
          >
            How it works
          </h2>
          <div className="grid gap-y-8">
            <img
              data-aos="fade-up"
              src={image}
              alt=""
              className="hidden md:block"
            />
            {datalist.map((val, i) => (
              <div data-aos="fade-up" key={i} className="mb-6 md:hidden">
                <img src={val.icon} alt="" />
                <p className="mt-4 text-base  sm:text-lg font-bold text-white">
                  {val.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid  md:grid-flow-col gap-8 md:gap-10 text-center items-center justify-center">
            <a
              data-aos="fade-right"
              href="#"
              className=" text-primary text-7xl mx-auto "
            >
              <FaDiscord />
            </a>
            <p className="text-primary text-4xl"> Join Our Discord Channel</p>
            <a href="https://discord.com/invite/xxdS792B7q" target={"_blank"} rel="noreferrer"><button
              data-aos="fade-left"
              className="btn py-3 px-6 bg-primary text-black rounded-md font-bold text-sm max-w-max mx-auto md:mx-0"
            >
              JOIN DISCORD
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
