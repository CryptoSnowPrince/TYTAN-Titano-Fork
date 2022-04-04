import Web3 from 'web3';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

let rawdata = fs.readFileSync('./contract/test.json');
let astroABI = JSON.parse(rawdata);

// create signer
var defaultWeb3 = new Web3(new Web3.providers.HttpProvider(process.env.WSS_URL_TEST));
let signer = defaultWeb3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
var web3 = new Web3(process.env.WSS_URL_TEST);

// create astro contract
var astroContract = new defaultWeb3.eth.Contract(astroABI, process.env.LOTTERY_ADDRESS);

// default gas price for sending transactions
const DEFAULT_GAS_PRICE = 100000000000;

// interval function has to be locked when other transaction occured
var LOCK_FUNCTION = false;

var interval_index = 0;
setInterval(async () => {
    if (LOCK_FUNCTION)
        return;

    LOCK_FUNCTION = true;

    try {
        var tx = await astroContract.methods.rebase(interval_index);
        await sendTx(signer, tx, DEFAULT_GAS_PRICE, 0);
    }
    catch (e) {
        console.log(e);
    }

    interval_index++;
    LOCK_FUNCTION = true;
}, 1000);

const sendTx = async (account, tx, gasPrice, value) => {
    var gas = 21000000;
    const data = tx.encodeABI();
    let gasFee = await tx.estimateGas({ from: signer.address });
    var nonce = await web3.eth.getTransactionCount(signer.address);
    nonce = web3.utils.toHex(nonce);

    const option = {
        from: account.address,
        to: tx._parent._address,
        data: data,
        nonce,
        gas: web3.utils.toHex(parseInt(gasFee * 1.5)),
        gasPrice: web3.utils.toHex(gasPrice),
        chain: await web3.eth.getChainId(),
        hardfork: 'berlin',
    };

    const signedTx = await web3.eth.accounts.signTransaction(option, account.privateKey);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('transactionHash', function (hash) {
            console.log('transactionHash : ', hash);
        })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("transaction is done");
        })
        .on('receipt', function (receipt) {
            console.log("Transaction receipt: ", receipt);
        })
        .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log('Attack failed: ', error)
        });
}
