// const express = require("express");
// const cors = require("cors");
const ethers = require('ethers');
require('dotenv').config();
const config = require("./config");
const ABI = require('./contract/tytan');
// const app = express();
// const router = express.Router();

// app.use(cors());
// app.use(express.json());

const url = config.RpcURL.https[config.chainID];
const contractAddress = config.tytan[config.chainID];
const customProvider = new ethers.providers.JsonRpcProvider(url);
const userPrivateKey = process.env.PRIVATE_KEY;

const customContract = (customPrivateKey) => {
    const customAccount = new ethers.Wallet(customPrivateKey, customProvider);
    const newContract = new ethers.Contract(contractAddress, ABI, customAccount)
    return newContract;
}

const rebaseFunction = async () => {
    console.log("rebaseFunction call");
    // const contract = customContract(userPrivateKey)

    // try {
    //     gasPrice = await customProvider.getGasPrice();
    //     const recipient = await tx.wait();
    //     await contract.rebase({ gasPrice: gasPrice.mul("12").div(10) });
    // } catch (err) { console.log("catch error", err) }

}

setInterval(rebaseFunction, 1000 * 60 * 30);

// app.listen(5000, () => console.log('Server running at port 5000'));