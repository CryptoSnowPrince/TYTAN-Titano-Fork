// const dotenv = require("dotenv");

// dotenv.config();

const config = {
    parcelforce: {
        56: '',
        97: '0x19a91af91915DC5821Cf2b38b6e4938C638bF628',
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
    INFURA_ID: "9f08884ad87343d89b817b96e19e5808",
    chainID: 97,
    privateKey: process.env.PRIVATE_KEY,
};

export default config;
