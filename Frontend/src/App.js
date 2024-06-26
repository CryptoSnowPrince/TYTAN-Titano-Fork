import React, { useEffect, useState, useCallback, useReducer } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
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
        56: config.RpcURL.https[config.chainID],
        97: config.RpcURL.https[config.chainID],
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
          account.slice(0, 7) + "..." + account.slice(-4, account.length);
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

  const extClient = (uri) =>
    new ApolloClient({
      uri: uri,
      cache: new InMemoryCache(),
    });

  const apolloExt = useCallback(async (queryString, uri) => {
    try {
      const data = await extClient(uri).query({
        query: gql(queryString),
      });
      return data;
    } catch (err) {
      console.error("external graph ql api error: ", err);
    }
  }, []);

  const getAverageHolding = useCallback(async () => {
    let holders = 0;
    const query = `
    query {
      protocolMetrics(orderBy: timestamp, orderDirection: desc, first: 1) {
        averageHolding
      }
    }
    `;
    try {
      const res = await apolloExt(query, config.THE_GRAPH_URL);
      holders = res?.data.protocolMetrics[0].averageHolding;
      let t = parseInt(res?.data.protocolMetrics[0].averageHolding);
      holders = t / 10 ** 18;
    } catch (error) {
      console.log("err: ", error);
    }
    return holders;
  }, [apolloExt]);

  const getBNBBalance = async (address) => {
    let balance = 0;
    try {
      const res = await axios.get(`https://deep-index.moralis.io/api/v2/${address}/balance?chain=0x38`, {
        headers: {
          accept: "application/json",
          "X-API-Key": "nt7iGNZbNrRtx0VEYMbmzgCPtV1Tve0o6iUP70D5vQB4raJbxpRHTN9ztwazERps",
        },
      });
      balance = parseFloat(ethers.utils.formatEther(res.data.balance));
    } catch (error) {
      console.log("err: ", error);
    }
    return balance;
  };

  const getBalance = async (contract_address, address) => {
    let balance = 0;
    const apiKey = config.API_KEY;
    try {
      const res = await axios.get(
        `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contract_address}&address=${address}&tag=latest&apikey=${apiKey}`,
      );
      balance = parseFloat(ethers.utils.formatEther(res.data.result));
    } catch (error) {
      console.log("err: ", error);
    }
    return balance;
  };

  const getTokenPriceData = async (symbol = "tytan") => {
    let resp;
    try {
      resp = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true`);
      return resp.data[symbol];
    } catch (e) {
    }
  }

  const getReflected = useCallback(async () => {
    let reflected = 0;
    if (account) {
      try {
        let txndata = await axios.get("https://api.bscscan.com/api", {
          timeout: 30000,
          params: {
            module: "account",
            action: "tokentx",
            address: account,
            contractaddress: config.tytan[config.chainID],
            startblock: 0,
            endblock: 99999999,
            sort: "desc",
            apikey: config.API_KEY,
          },
        });
        const movements = txndata.data.result.reduce(
          (acc, data) => {
            if (data.contractAddress !== config.tytan[config.chainID].toLowerCase()) {
              return acc;
            }
            let value = data.value / 10 ** 18;
            let isSell = data.from.toLowerCase() === account.toLowerCase();

            if (isSell) {
              acc.sold += value;
            } else {
              acc.bought += value;
            }
            return acc;
          },
          {
            sold: 0,
            bought: 0,
          },
        );
        reflected = movements.bought - movements.sold;
      } catch (e) {
        console.warn("failed contract calls in slice", e);
      }
    }
    return reflected;
  }, [account]);

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
        const priceData = await getTokenPriceData("titano");
        const marketPrice = priceData.usd;
        const usd_24h_change = priceData.usd_24h_change;
        const web3 = new Web3(config.RpcURL.https[config.chainID]);
        const contract = new web3.eth.Contract(ABI, config.tytan[config.chainID]);
        const balance = account ? await contract.methods.balanceOf(account).call() : 0;
        const totalSupply = await contract.methods.totalSupply().call();
        const criculatingSupply = totalSupply * 2.75 / 100;
        const reflected = await getReflected();

        const wbnbPrice = await getTokenPriceData("wbnb");

        const tytanAmountofRFV =
          await getBalance(config.tytan[config.chainID], config.RFV[config.chainID]);
        const bnbAmountofRFV =
          await getBNBBalance(config.RFV[config.chainID]);
        const treasuryRFV = tytanAmountofRFV * marketPrice + bnbAmountofRFV * wbnbPrice.usd;
        const pastRFV = 499301.52;

        const tytanAmountofTreasury =
          await getBalance(config.tytan[config.chainID], config.Treasury[config.chainID]);
        const bnbAmountofTreasury =
          await getBNBBalance(config.Treasury[config.chainID]);

        const treasury = treasuryRFV + tytanAmountofTreasury * marketPrice + bnbAmountofTreasury * wbnbPrice.usd;
        const pastTreasury = 728135.06;

        const wbnbAmountofPair = await getBalance(config.wbnb[config.chainID], config.pair[config.chainID])

        const pair = wbnbAmountofPair * wbnbPrice.usd;
        const pastPair = 2397215.48;

        const backedLiquidity = ((bnbAmountofRFV + bnbAmountofTreasury) / wbnbAmountofPair) * 100;

        const averageHolding = await getAverageHolding();

        const Ddata = {
          marketPrice: marketPrice,
          usd_24h_change: usd_24h_change,
          circulatingSupply: criculatingSupply / (10 ** 18),
          backedLiquidity: backedLiquidity,
          averageHolding: averageHolding,
          pastRFV: pastRFV,
          treasuryRFV: treasuryRFV,
          pastTreasury: pastTreasury,
          treasury: treasury,
          pair: pair,
          pastPair: pastPair,
        }

        const Adata = {
          balance: balance / (10 ** 18).toFixed(2),
          marketPrice: marketPrice,
          reflected: reflected
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
  }, [checkPath, account, provider, getReflected, getAverageHolding])

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
