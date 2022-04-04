import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import "./style.css";

import RESIZE from "../../assets/icons/resize.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = ({ show, setShow, connect, web3Provider, disconnect, showAccountAddress }) => {
  return (
    <div className="text-white items-center flex justify-between md:justify-end header py-6 paddingRight">
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
      <div className="grid grid-flow-col justify-end items-center gap-x-10 py-4 header-mobile-css">
        <Menu as="div" className="relative inline-block text-left header-mobile-element-hidden">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2.5 bg-white  font-medium header-text-primary text-gray-700 ">
              TYTAN
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className=" header-dropdown-menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://pancakeswap.finance/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : ' text-gray-700',
                        'block px-4 py-2 header-text-primary'
                      )}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Buy on Pancakeswap&nbsp;
                      <img className="icon" width="13" height="13"
                        src={RESIZE} alt="" style={{ display: "inline" }} />
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://pancakeswap.finance/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : ' text-gray-700',
                        'block px-4 py-2 header-text-primary'
                      )}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Chart&nbsp;
                      <img className="icon" width="13" height="13" style={{ display: "inline" }}
                        src={RESIZE} alt="" />
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : ' text-gray-700',
                        'block px-4 py-2 header-text-primary'
                      )}
                    >
                      ADD TOKEN TO WALLET
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {!web3Provider ? (<button className="font-medium py-2.5 px-4 text-white border border-primary rounded-md" onClick={connect}>
          Connect Wallet
        </button>) : (<button className="font-medium py-2.5 px-4 text-white border border-primary rounded-md" onClick={disconnect}>
          {showAccountAddress}
        </button>)}
      </div>
    </div>
  );
};

export default Header;
