import privateInfo from "./contract/private";

const config = {
    tytan: {
        56: '0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f',
        97: '',
    },
    BlockExplorerURL: {
        56: "https://bscscan.com",
        97: "https://testnet.bscscan.com",
    },
    RpcURL: {
        wss: {
            1: "wss://mainnet.infura.io/ws/v3/9254bae6432742babcfc7d367c7e77cd",
        },
        https: {
            56: "https://bsc-dataseed1.defibit.io/",
            97: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet",
        },
    },
    chainHexID: {
        56: "0x38",
        97: "0x61",
    },
    INFURA_ID: privateInfo.REACT_APP_INFURA_ID,
    chainID: 56,
    privateKey: privateInfo.REACT_APP_PRIVATE_KEY,
};

export default config;
