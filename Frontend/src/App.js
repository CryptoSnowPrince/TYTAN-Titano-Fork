import React, { useEffect, useState, useCallback, useReducer } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, ethers } from "ethers";

import "./App.css";
import Home from "./pages/Home";
import { Layout } from "./components";
import Account from "./pages/Account";
import Calculator from "./pages/Calculator";
import Terms from "./pages/Terms";
import MainHome from "./pages/MainHome";
import NotFound from './pages/error/NotFound';
import "aos/dist/aos.css";

import config from "./contract/config";
import ABI from "./contract/abi/abi.json";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: config.INFURA_ID, // required
      rpc: {
        97: config.RpcURL[config.chainID],
      },
    },
  },
};

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
    theme: "dark",
  });
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.chainId,
      };
    case "RESET_WEB3_PROVIDER":
      return initialState;
    default:
      throw new Error();
  }
}

function App() {
  const path = useLocation().pathname;
  const [account, setAccount] = useState("");
  const [showAccountAddress, setShowAccountAddress] = useState("");
  const [dashboardData, setDashboardData] = useState({});
  const [accountdData, setAccountData] = useState({});
  const [calculatorData, setCalculatorData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider, web3Provider } = state;

  const checkPath = useCallback(() => {
    return (path.includes("dashboard") || path.includes("account") || path.includes("calculator")) ? true : false;
  }, [path])

  const connect = useCallback(async function () {
    if (checkPath()) {
      try {
        const provider = await web3Modal.connect();
        if (window.ethereum) {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: config.chainHexID[config.chainID] }], // chainId must be in hexadecimal numbers
          });
        } else {
          console.log(
            "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
          );
        }

        const web3Provider = new providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const account = await signer.getAddress();
        const network = await web3Provider.getNetwork();
        const show_address =
          account.slice(0, 5) + "..." + account.slice(-6, account.length);
        setShowAccountAddress(show_address);
        setAccount(account);
        dispatch({
          type: "SET_WEB3_PROVIDER",
          provider,
          web3Provider,
          show_address,
          chainId: network.chainId,
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: config.chainHexID[config.chainID],
                  rpcUrl: config.RpcURL[config.chainID],
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
          }
        } else if (error.code === 4001) {
          console.log(error);
        }
        console.log(`${error}`);
      }
    }
  }, [checkPath]);

  const disconnect = useCallback(async function () {
    await web3Modal.clearCachedProvider();
    setShowAccountAddress(null);
    setAccount(null);
    dispatch({
      type: "RESET_WEB3_PROVIDER",
    });
  }, []);

  const getTokenPriceData = async (symbol = "titano") => {
    let resp;
    try {
      resp = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true`);
      return resp.data[symbol];
    } catch (e) {
    }
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);
  useEffect(() => {
    if (provider) {
      const handleAccountsChanged = (accounts) => {
        connect();
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        });
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
        }
      };
    }
  }, [provider, connect]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const priceData = await getTokenPriceData();
        const marketPrice = priceData.usd;
        const usd_24h_change = priceData.usd_24h_change;
        // const web3 = new Web3(window.ethereum);
        const web3 = new Web3(config.RpcURL.https[config.chainID]);
        const contract = new web3.eth.Contract(ABI, config.tytan[config.chainID]);
        const balance = account ? await contract.methods.balanceOf(account).call() : 0;
        const totalSupply = await contract.methods.totalSupply().call();
        const criculatingSupply = totalSupply * 2.75 / 100;

        const Ddata = {
          marketPrice: marketPrice,
          usd_24h_change: usd_24h_change,
          circulatingSupply: criculatingSupply / (10 ** 18),
          backedLiquidity: 0,
          averageHolding: 0
        }

        const Adata = {
          balance: balance / (10 ** 18).toFixed(2),
          marketPrice: marketPrice
        }

        const Cdata = {
          balance: balance / (10 ** 18).toFixed(2),
          marketPrice: marketPrice
        }

        setDashboardData(Ddata);
        setAccountData(Adata);
        setCalculatorData(Cdata);

      } catch (error) {
        console.log(error);
      }
    }
    checkPath() && init();
  }, [checkPath, account, provider])

  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={<Layout connect={connect} web3Provider={web3Provider} disconnect={disconnect} showAccountAddress={showAccountAddress} />}>
          <Route path="/dashboard" element={<Home data={dashboardData} />} />
          <Route path="/account" element={<Account data={accountdData} />} />
          <Route path="/calculator" element={<Calculator marketPrice={calculatorData.marketPrice} titanoBalance={calculatorData.balance} />} />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
