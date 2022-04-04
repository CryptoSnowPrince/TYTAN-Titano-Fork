const config = {
    tytan: {
        3: '0x3981eEdcEC28A43Fc8b3d2890E1D2A6d7d43bDcC', // fake
        4: '0x60364a0aD95c2146470d09ACb6B40a3474575264', // fake
        56: '0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f',
        97: '0x41fc2c520C5591d29094825C903e5Aa2C6d4262D',
    },
    rpc: {
        https: {
            3: "https://ropsten.infura.io/v3/2b400873a26747b694c7075796523b3d",
            4: "https://rinkeby.infura.io/v3/2b400873a26747b694c7075796523b3d",
            56: "https://bsc-dataseed1.defibit.io/",
            97: "https://data-seed-prebsc-2-s3.binance.org:8545/",
        },
    },
    DEFAULT_GAS_PRICE: 100000000000,
    chainID: 97,
};

export default config;
