import React, { useEffect, useState, useCallback, useReducer } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

import "./App.css";
import Home from "./pages/Home";
import { Layout } from "./components";
import Account from "./pages/Account";
import Calculator from "./pages/Calculator";
import Terms from "./pages/Terms";
import MainHome from "./pages/MainHome";
import "aos/dist/aos.css";

import config from "./contract/config";
import ABI from "./contract/abi/abi.json";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: config.INFURA_ID, // required
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

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(ABI, config.parcelforce[config.chainID]);



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
    return path.includes("dashboard") ? true : false;
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
          alert(
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
      const priceData = await getTokenPriceData();
      const marketPrice = priceData.usd;
      const usd_24h_change = priceData.usd_24h_change;
      const balance = account ? await contract.methods.balanceOf().call(account) : 0;
      const totalSupply = await contract.methods.getCirculatingSupply().call();
      const owner = await contract.methods.owner().call();
      // await contract.methods.addMinter(account).send({ from: account });
      // const initValue = await contract.methods.balanceOf(account).call();
      const criculatingSupply = await contract.methods.getCirculatingSupply().call();
      // const backedLiquidity = await contract.methods.getCirculatingSupply().call();
      const averageHolding = await contract.methods.checkSwapThreshold().call();
      console.log(marketPrice, totalSupply, owner, criculatingSupply / (10 ** 18), averageHolding / (10 ** 18));

      const Ddata = {
        marketPrice: marketPrice,
        usd_24h_change: usd_24h_change > 0 ? ("+" + usd_24h_change.toFixed(2)) : usd_24h_change.toFixed(2),
        circulatingSupply: criculatingSupply / (10 ** 18),
        backedLiquidity: 0,
        averageHolding: (averageHolding / (10 ** 18)).toFixed(2)
      }

      const Adata = {
        balance: balance,
        marketPrice: marketPrice
      }

      const Cdata = {
        balance: balance,
        marketPrice: marketPrice
      }
      setDashboardData(Ddata);
      setAccountData(Adata);
      setCalculatorData(Cdata);
    }
    checkPath() && init();
  }, [checkPath, account])

  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Layout connect={connect} web3Provider={web3Provider} disconnect={disconnect} showAccountAddress={showAccountAddress} />}>
          <Route path="" element={<Home data={dashboardData} />} />
          <Route path="account" element={<Account data={accountdData} />} />
          <Route path="calculator" element={<Calculator marketPrice={calculatorData.marketPrice} titanoBalance={calculatorData.balance} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
