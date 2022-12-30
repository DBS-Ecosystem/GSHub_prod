const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validate = require('../validation');
const verifytoken = require('../verifytoken');
const crypto = require('crypto');

var fs = require('fs');
const path = require('path');
const algosdk = require('algosdk');
const { assert } = require('console');
const algodToken = {'X-API-Key':'ityS29dYLM8g2dWRQfgqaHcJrbwDqpX47kFJYNW4'};
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
const algodPort = '';
const Base64 = require('js-base64'); 
const utils = require('../utils');

//id of the "registration" smart contract
var appId = 151273124;
//system wallet address
const system_mnemonic="gather under group festival steak pretty evidence lazy smoke mail smile tag stand twin attack wood game once castle fatal rival thing business abandon material";
var system = algosdk.mnemonicToSecretKey(system_mnemonic);

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const notAllowedMethod = (req, res) => {
    res.status(400).json({error: true, message: "Method not allowed!"});
}

router.route('/reg').post(async (req, res) => {
    //Validation
    const { error } = validate.registration.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //User existance check
    const exist = await User.findOne({$or: [{login: req.body.login}, {email: req.body.email}]});
    if (exist) {
        if (exist.email === req.body.email) return res.status(400).json({error: true, message: 'User already exists!'});
        if (exist.login === req.body.login) return res.status(400).json({error: true, message: 'Login must be unique!'});
    }
    //Hash password
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');
    //Create new User
    const user = new User({...req.body, password: {salt, hash}});
    try {
        await user.save();
        res.json({error: false, message: 'User successfully registered!'});
    } catch(err) {
        res.status(400).json({error: true, message: "Database operation error"});
    }

    //user wallet adress example
    var user_mnemonic = "action crunch limb peanut neglect swap address wild spare observe update game sketch move elite chest swim stone sudden palm sign right season abandon brush";  
    var userAcc = algosdk.mnemonicToSecretKey(user_mnemonic);
    //opt in the user to Registration application
    optInTransaction(userAcc, user.Type).catch(e => {
        console.log(e);
    });
}).all(notAllowedMethod);

router.route('/login').post(async (req, res) => {
    //Validation
    const { error } = validate.login.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //User credentials check
    const user = await User.findOne({$or: [{login: req.body.login}, {email: req.body.login}]});
    if (!user) return res.status(400).json({error: true, message: 'Incorect login or email'});
    const hash = crypto.pbkdf2Sync(req.body.password, user.password.salt, 1000, 64, 'sha512').toString('hex');
    if (hash!==user.password.hash) return res.status(400).json({error: true, message: 'Incorect pass'});
    //Create and assign token
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    const token = jwt.sign({
        _id: user._id,
        type: user.type,
        name: `${user.name} ${user.surname}`
    }, process.env.TOKEN_SECRET, { expiresIn: '7d' });
    //Send response
    res.header('auth-token', token).json({error: false, message: 'Logged in!'});
}).all(notAllowedMethod);

router.route('/update').patch(verifytoken, async (req, res) => {
    //Validation
    const { error } = validate.update.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //User current password check
    const user = await User.findOne({_id: req.user._id});
    const hash = crypto.pbkdf2Sync(req.body.curpassword, user.password.salt, 1000, 64, 'sha512').toString('hex');
    if (hash!==user.password.hash) return res.status(400).json({error: true, message: 'Incorect pass'});
    //Hash new password
    let value = req.body;
    delete value.curpassword;
    if (value.password) {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(value.password, salt, 1000, 64, 'sha512').toString('hex');
        value.password = {salt, hash};
    }
    //Update credentials
    try{
        await User.updateOne({_id: req.user._id}, {$set: value});
        res.json({error: false, message: 'Credentials successfully changed!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
}).all(notAllowedMethod);

router.route('/delete').delete(verifytoken, async (req, res) => {
    try{
        await User.deleteOne({_id: req.user._id});
        res.json({error: false, message: 'User account successfully deleted!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
}).all(notAllowedMethod);

router.all('/*', (req, res, next) => {
    res.status(400).json({error: true, message: "No such path!"});
});

module.exports = router;

async function getBasicProgramBytes(client, fileName) {
    const filePath = path.join(__dirname, fileName);
    const program = fs.readFileSync(filePath);
  
    // use algod to compile the program
    const compiledProgram = await client.compile(program).do();
    return new Uint8Array(Buffer.from(compiledProgram.result, 'base64'));
  }

/**
 * Wait for confirmation — timeout after 2 rounds
 */
 async function verboseWaitForConfirmation(client, txnId) {
    console.log('Awaiting confirmation (this will take several seconds)...');
    const roundTimeout = 2;
    const completedTx = await utils.waitForConfirmation(
      client,
      txnId,
      roundTimeout
    );
    console.log('Transaction successful: '+ completedTx['application-index']);
    return completedTx;
  }

  /**
     * Log a bolded message to console
     */
function logBold(message) {
    console.log(`${utils.fmt.bold}${message}${utils.fmt.reset}`);
}

//create app (only one time)
async function createAppTransaction (){

    let programFile = 'registration.teal';

    //check user`s balance
    let user_info = (await algodClient.accountInformation(system.addr).do());
    let minBalance = 201_000;
    assert(user_info.amount > minBalance, "Not enough tokens on the balance");

    // define application parameters
    const from = system.addr;
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;
    const approvalProgram = await getBasicProgramBytes(algodClient,programFile);
    const clearProgram = await getBasicProgramBytes(algodClient,programFile);
    const numLocalInts = 1;
    const numLocalByteSlices = 1;
    const numGlobalInts = 3;
    const numGlobalByteSlices = 2;
    const appArgs = [Uint8Array.from("SPO"), Uint8Array.from("SME")];

    // get suggested params
    const suggestedParams = await algodClient.getTransactionParams().do();

    // create the application creation transaction
    const createTxn = algosdk.makeApplicationCreateTxn(
    from,
    suggestedParams,
    onComplete,
    approvalProgram,
    clearProgram,
    numLocalInts,
    numLocalByteSlices,
    numGlobalInts,
    numGlobalByteSlices,
    appArgs
    );

    // send the transaction
    logBold('Sending application creation transaction.');
    const signedCreateTxn = createTxn.signTxn(system.sk);
    const { txId: createTxId } = await algodClient
    .sendRawTransaction(signedCreateTxn)
    .do();

    // wait for confirmation
    const completedTx = await verboseWaitForConfirmation(algodClient, createTxId);

}

//register the user
async function optInTransaction (userAcc, userType){
    const suggestedParams = await algodClient.getTransactionParams().do();
    const appArgs = [Uint8Array.from(userType)];

    const optInTxn = algosdk.makeApplicationOptInTxn(
        userAcc.addr,
        suggestedParams,
        appId,
        appArgs
    );

    // send the transaction
    logBold('Sending application opt in transaction.');
    const signedOptInTxn = optInTxn.signTxn(system.sk);
    const { txId: optInTxId } = await algodClient
        .sendRawTransaction(signedOptInTxn)
        .do();

    // wait for confirmation
    await verboseWaitForConfirmation(algodClient, optInTxId);

}

// Close out (opt account out) from the application
async function closeOutTransaction (userAcc){
    const suggestedParams = await algodClient.getTransactionParams().do();
    const appArgs = [];

    const closeOutTxn = algosdk.makeApplicationCloseOutTxn(
        userAcc.addr,
        suggestedParams,
        appId,
        appArgs
    );

    // send the transaction
    logBold('Sending application close out transaction.');
    const signedCloseOutTxn = closeOutTxn.signTxn(userAcc.sk);
    const { txId: closeOutTxnId } = await algodClient
        .sendRawTransaction(signedCloseOutTxn)
        .do();

    // wait for confirmation
    await verboseWaitForConfirmation(algodClient, closeOutTxnId);
}

//delete smart contract
async function deleteAppTransaction (){
    const suggestedParams = await algodClient.getTransactionParams().do();

    const deleteTxn = algosdk.makeApplicationDeleteTxn(
        system.addr,
        suggestedParams,
        appId
    );

    // send the transaction
    logBold('Sending application delete transaction.');
    const signedDeleteTxn = deleteTxn.signTxn(system.sk);
    const { txId: deleteTxnId } = await algodClient
        .sendRawTransaction(signedDeleteTxn)
        .do();

    // wait for confirmation
    await verboseWaitForConfirmation(algodClient, deleteTxnId);

}

// read local state of application from user account
async function readLocalState(client, account, index){
    let accountInfoResponse = await client.accountInformation(account.addr).do();
    for (let i = 0; i < accountInfoResponse['apps-local-state'].length; i++) { 
        if (accountInfoResponse['apps-local-state'][i].id == index) {
            console.log("User's local state:");
            for (let n = 0; n < accountInfoResponse['apps-local-state'][i][`key-value`].length; n++) {
                console.log(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
            }
        }
    }
}

// read global state of application
async function readGlobalState(client, index){
    let applicationInfoResponse = await client.applicationInfo(index).do();
    let globalState = []
    if(applicationInfoResponse['params'].includes('global-state')) {
        globalState = applicationInfoResponse['params']['global-state']
    }
    for (let n = 0; n < globalState.length; n++) {
        console.log(applicationInfoResponse['params']['global-state'][n]);
    }
}

