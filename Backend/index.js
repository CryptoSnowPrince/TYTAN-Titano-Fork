import Web3 from 'web3';
import fs from 'fs';
import config from './config.js'
import dotenv from 'dotenv';
dotenv.config();

const rawdata = fs.readFileSync('./contract/tytan.json');
const tytanABI = JSON.parse(rawdata);

// create signer
const web3 = new Web3(config.rpc.https[config.chainID]);
const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

// create tytan contract
const tytanContract = new web3.eth.Contract(tytanABI, config.tytan[config.chainID]);

// default gas price for sending transactions
const DEFAULT_GAS_PRICE = config.DEFAULT_GAS_PRICE;

// interval function has to be locked when other transaction occured
var LOCK_FUNCTION = false;

var interval_index = 0;

const autoRebase = async function() {
    if (LOCK_FUNCTION)
        return;

    LOCK_FUNCTION = true;

    try {
        const tx = await tytanContract.methods.rebase(interval_index, interval_index);
        await sendTx(signer, tx, DEFAULT_GAS_PRICE, 0);
    }
    catch (e) {
        console.log(e);
    }

    interval_index++;
    LOCK_FUNCTION = false;
}

setInterval(autoRebase, 1800*1000);

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
    };

    const signedTx = await web3.eth.accounts.signTransaction(option, account.privateKey);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('transactionHash', function (hash) {
            console.log('transactionHash : ', hash);
        });;
}

autoRebase().then(() => console.log("start"));
