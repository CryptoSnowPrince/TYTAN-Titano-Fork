const config = {
    tytan: {
        4: '0xa5C8a46Ccbda3125a8220818ce411C6d1569B8eb',
        56: '0x07CD66cdc4571aAb645D4819E3A91F61D847792E',
        // 56: '0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f',
        97: '0x66b243cE4a70AFF92F9F52DcEfB5D1C60e77064d',
        // 97: '0x19a91af91915DC5821Cf2b38b6e4938C638bF628',
    },
    rpc: {
        wss: {
            1: "wss://mainnet.infura.io/ws/v3/9254bae6432742babcfc7d367c7e77cd",
            56: "https://bsc-dataseed1.defibit.io/",
        },
        https: {
            4: "https://rinkeby.infura.io/v3/2b400873a26747b694c7075796523b3d",
            56: "https://bsc-dataseed1.defibit.io/",
            97: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet",
        },
    },
    DEFAULT_GAS_PRICE: 100000000000,
    chainID: 4,
};

export default config;
