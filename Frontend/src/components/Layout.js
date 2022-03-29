import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
const Layout = ({ children, connect, web3Provider, disconnect, showAccountAddress }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-white layout">
      <div className="flex dashboard">
        <div className=" relative dashboard-left">
          <Sidebar show={show} setShow={setShow} />
        </div>
        <div className="dashboard-right flex-1">
          <Header show={show} setShow={setShow} connect={connect} web3Provider={web3Provider} disconnect={disconnect} showAccountAddress={showAccountAddress} />
          <div className=" mt-44 px-4 pb-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
