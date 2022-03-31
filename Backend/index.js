const express = require("express");
const cors = require("cors");
const ethers = require('ethers');
require('dotenv').config();
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const url = 'https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/testnet';
const contractAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const ABI = require('../utils/usdcAbi.json');
const customProvider = new ethers.providers.JsonRpcProvider(url);
const userPrivateKey = "";

const customContract = (customPrivateKey) => {
    const customAccount = new ethers.Wallet(customPrivateKey, customProvider);
    const newContract = new ethers.Contract(contractAddress, ABI, customAccount)
    return newContract;
}

const rebaseFunction = async () => {
    const contract = customContract(userPrivateKey)

    try {
        gasPrice = await customProvider.getGasPrice();
        const recipient = await tx.wait();
        await contract.rebase({ gasPrice: gasPrice.mul("12").div(10) });
    } catch (err) { console.log("catch error", err) }

}

setInterval(rebaseFunction, 1000 * 60 * 30);

app.listen(5000, () => console.log('Server running at port 5000'));