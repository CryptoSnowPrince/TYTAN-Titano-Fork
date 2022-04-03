const Web3 = require('web3');
require('dotenv').config();
const config = require("./config");
const tytanABI = require('./contract/tytan');

const web3 = new Web3(new Web3.providers.HttpProvider(config.RpcURL.https[config.chainID]));
const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
const tytanContract = new web3.eth.Contract(tytanABI, config.tytan[config.chainID]);

const sendTx = async (account, tx, gasPrice, value) => {
    var gas = 21000000;
    const data = tx.encodeABI();
    let gasFee = await tx.estimateGas({ from: account.address });
    var nonce = await web3.eth.getTransactionCount(account.address);
    nonce = web3.utils.toHex(nonce);

    console.log(account.address);

    const option = {
        from: account.address,
        to: tx._parent._address,
        data: data,
        gas: web3.utils.toHex(parseInt(gasFee * 1.5)),
        gasPrice: web3.utils.toHex(gasPrice),
        chain: await web3.eth.getChainId(),
        hardfork: 'berlin',
        value
    };

    const signedTx = await web3.eth.accounts.signTransaction(option, account.privateKey);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

let count = 0;
const rebaseFunction = async () => {
    console.log("rebaseFunction call", count++);
    console.log("signer:", signer);
    // return;
    try {
        let tx = await tytanContract.methods.rebase(1, 1);
        // const retVal = await sendTx(signer, tx, 100000);
        const retVal = await sendTx(signer, tx, config.DEFAULT_GAS_PRICE);
        console.log(retVal);
    } catch (err) {
        console.log("catch error", err);
    }

}

rebaseFunction();
// setInterval(rebaseFunction, 1000 * 60 * 30);
// setInterval(rebaseFunction, 5000);
