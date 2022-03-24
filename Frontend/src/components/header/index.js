import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import "./style.css";
import OutsideClickHandler from "react-outside-click-handler";
const Header = ({ show, setShow }) => {
  return (
    <div className="text-white items-center flex justify-between md:justify-end header py-6">
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
      >
        <button
          className="px-2 text-2xl  md:hidden toggle-bar relative z-50 transition-all duration-300"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <FaTimes /> : <HiOutlineMenuAlt2 />}
        </button>
      </OutsideClickHandler>
      <div className="grid grid-flow-col justify-end items-center gap-x-10  px-4 py-4">
        <button className=" h-full font-medium hidden sm:block">
          <p className="grid grid-flow-col justify-start items-center gap-1">
            {/* <span className="text-xl">
              <HiInformationCircle />
            </span> */}
            <span className="text-primary"> TITANO</span>
          </p>
        </button>
        <button className="font-medium py-2.5 px-4 text-white border border-primary rounded-md">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;
