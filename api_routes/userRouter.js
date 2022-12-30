const multer = require('multer');
const router = require('express').Router();
const User = require('../models/User');
const Support = require('../models/SupMessage');
const DTO = require('../models/DTO');
const Bid = require('../models/Bid');
const Message = require('../models/Message');
const validate = require('../validation');

const fs = require('fs');
const path = require('path');
const algosdk = require('algosdk');
const { assert } = require('console');
const utils = require('../utils');

var algodToken = {'X-API-Key':'ityS29dYLM8g2dWRQfgqaHcJrbwDqpX47kFJYNW4'};
var algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
var algodPort = '';

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);


const notAllowedMethod = (req, res) => {
    res.status(400).json({error: true, message: "Method not allowed!"});
}

// ****Routes for find dto****

router.route('/find/project')
.get(async (req, res) => {
    try {
        const projects = await DTO.find({status: "active"});
        res.json({error: false, message: projects});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.post(async (req, res) => {
    //Validation
    let { error } = validate.skill.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Return projects
    const {major, submajor, minor, unit} = req.body;
    const skill = `${major}${submajor}${minor}${unit}`;
    try {
        const projects = await DTO.find({status: "active", category: skill});
        res.json({error: false, message: projects});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****Route to get available projects by category****

router.route('/cabinet')
.get(async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user._id});
        const projects = await DTO.find({status: "active", category: {$in: user.skills}});
        res.json({error: false, message: projects});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****Route to active chats****

router.route('/conversations')
.get(async (req, res) => {
    if(req.user.type === "SME"){
        try {
            let projects = await DTO.find({"performer.id": req.user._id, status: "inwork"});
            res.json({error: false, message: projects.map(prt => {
                return {
                    id: prt._id,
                    name: prt.name,
                    issuedBy: prt.issuedBy,
                    performer: prt.performer,
                    date: prt.date
                }
            })});
        } catch {
            res.status(500).json({error: true, message: "Database operation error"});
        }
    } else if (req.user.type === "SPO") {
        try {
            const projects = await DTO.find({"issuedBy.id": req.user._id, status: "inwork"});
            res.json({error: false, message: projects.map(prt => {
                return {
                    id: prt._id,
                    name: prt.name,
                    issuedBy: prt.issuedBy,
                    performer: prt.performer,
                    date: prt.date
                }
            })});
        } catch {
            res.status(500).json({error: true, message: "Database operation error"});
        }
    } else return res.status(400).json({error: true, message: "Unknown user type!"});
})
.all(notAllowedMethod);

router.route('/message')
.post(async (req, res) => {
    //Validation
    let { error } = validate.message.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Save to Database
    try{
        const message = new Message({...req.body, from : {name: req.user.name, id: req.user._id}});
        await message.save();
        res.json({error: false, message: 'Message successfully sent!'});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/messages/:id')
.get(async (req, res) => {
    try {
        const messages = await Message.find({"project.id": req.params.id});
        res.json({error: false, message: messages.map(msg => {
            return {
                id: msg._id,
                text: msg.text,
                from: msg.from,
                project: msg.project,
                date: msg.date
            }
        })});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****All routes to interact with bided projects****

router.route('/bids')
.get(async (req, res) => {
    if(req.user.type === "SME"){
        try {
            let bids = await Bid.find({"from.id": req.user._id});
            bids = bids.map(bid => bid.project.id);
            const projects = await DTO.find({_id: {$in: bids}, status: "active"});
            res.json({error: false, message: projects.map(prt => {
                return {
                    id: prt._id,
                    name: prt.name,
                    issuedBy: prt.issuedBy,
                    budget: prt.budget,
                    duration: prt.duration,
                    price: prt.price,
                    date: prt.date
                }
            })});
        } catch {
            res.status(500).json({error: true, message: "Database operation error"});
        }
    } else if (req.user.type === "SPO") {
        try {
            const projects = await DTO.find({"issuedBy.id": req.user._id, status: "active"});
            res.json({error: false, message: projects.map(prt => {
                return {
                    id: prt._id,
                    name: prt.name,
                    issuedBy: prt.issuedBy,
                    budget: prt.budget,
                    date: prt.date
                }
            })});
        } catch {
            res.status(500).json({error: true, message: "Database operation error"});
        }
    } else return res.status(400).json({error: true, message: "Unknown user type!"});
})
.all(notAllowedMethod);

router.route('/bid')
.post(async (req, res) => {
    // Only SME can place bids
    if (req.user.type !== "SME") return res.status(400).json({error: true, message: 'Only SME users can place bids'});
    //Validation
    let { error } = validate.bid.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Save to Database
    try{
        const project = await DTO.findOne({name: req.body.project.name, _id: req.body.project.id});
        if (!project) return res.status(400).json({error: true, message: "Requested project doesn't exist"});
        const bid = new Bid({...req.body, from: {name: req.user.name, id: req.user._id}});
        await bid.save();
        res.json({error: false, message: 'Bid successfully placed!'});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****Financial route, unused for now****

router.route('/finances')
.get(async (req, res) => {
    res.json({error: false, message: 'This page in development'});
})
.all(notAllowedMethod);

// ****All routes to get and change private information****

router.route('/private/info')
.post(multer().single('avatar'), async (req, res) => {
    if (req.body.language) req.body.language = JSON.parse(req.body.language);
    //Validation
    let { error } = validate.private.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    if (req.file) {
        error = validate.file.validate(req.file.buffer).error;
        if (error) return res.status(400).json({error: true, message: error.details[0].message});
    }
    //Update private info
    try{
        const data = !req.file ? req.body : {...req.body, avatar: req.file.buffer};
        await User.updateOne({_id: req.user._id}, {$set: data});
        res.json({error: false, message: 'Private info successfully changed!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/private/avatar')
.get(async (req, res) => {
    try{
        const { avatar } = await User.findOne({_id: req.user._id});
        res.send(avatar);
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/private/info/:id')
.get(async (req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id});
        const members = await User.count({type: user.type});
        let projects;
        switch (user.type) {
            case "SPO":
                projects = await DTO.find({"issuedBy.id": req.params.id});
                break;
            case "SME":
                projects = await DTO.find({"performer.id": req.params.id});
                break;
        }
        //get array of user dtos
        let act = 0, fsh = 0, all = 0;
        if (projects && projects.length > 0) {
            act = projects.filter(dto => dto.status === "active").length;
            fsh = projects.filter(dto => dto.status === "finished").length;
            all = projects.length;
        };
        const userData = {
            type: user.type,
            name: `${user.name} ${user.surname}`,
            location: `${user.city}, ${user.country}`,
            rank: `${user.rank} place of ${members}`,
            finishedDTO: fsh,
            activeDTO: act,
            allDTO: all,
            registered: Date.now() - user.regdate,
            lastvisit: user.lastvisit,
            feedbacks: user.feedbacks.map(feedback => {
                let {_id, ...rest} = feedback;
                return rest;
            })
        };
        res.json({error: false, result: userData});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/private/avatar/:id')
.get(async (req, res) => {
    try{
        const { avatar } = await User.findOne({_id: req.params.id});
        res.send(avatar);
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****Profile route****

router.route('/profile')
.post(async (req, res) => {
    //Validation
    const { error } = validate.profile.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});

    //Save data to DB
    try{
        await User.updateOne({_id: req.user._id}, {$set: req.body});
        res.json({error: false, message: 'Profile info successfully changed!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }   
})
.all(notAllowedMethod);

router.route('/profile/category')
.post(async (req, res) => {
    //Validation
    const { error } = validate.skill.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Save data to DB
    try{
        const {major, submajor, minor, unit} = req.body;
        const skill = `${major}${submajor}${minor}${unit}`;
        await User.updateOne({_id: req.user._id}, {$push: {skills: skill}});
        res.json({error: false, message: 'Profile info successfully changed!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }   
})
.all(notAllowedMethod);

router.route('/profile/portfolio')
.post(multer().single('file'), async (req, res) => {
    //Validation
    let { error } = validate.portfolio.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    if (req.file) {
        error = validate.file.validate(req.body).error;
        if (error) return res.status(400).json({error: true, message: error.details[0].message});
    }
    //Add folio
    try{
        const data = !req.file ? req.body : {...req.body, file: req.file};
        await User.updateOne({_id: req.user._id}, {$push: {portfolio: data}});
        res.json({error: false, message: 'Portfolio successfully added!'});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.get(async (req, res) => {
    try{
        const user = await User.findOne({_id: req.user._id});
        if(!user.portfolio) user.portfolio = [];
        res.json({error: false, message: user.portfolio.map(fol => {
            return {
                id: fol._id,
                name: fol.name,
                category: fol.category,
                about: fol.about
            }
        })});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/profile/portfolio/:id')
.patch(multer().single('file'), async (req, res) => {
    //Validation
    let { error } = validate.folioupdate.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    if (req.file) {
        error = validate.file.validate(req.body).error;
        if (error) return res.status(400).json({error: true, message: error.details[0].message});
    }
    //Update folio
    try{
        const data = !req.file ? req.body : {...req.body, file: req.file};
        await User.updateOne({_id: req.params.id}, {$set: data});
        res.json({error: false, message: 'Portfolio successfully added!'});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.delete(async (req, res) => {
    try{
        await User.deleteOne({_id: req.params.id});
        res.json({error: false, message: 'Portfolio successfully deleted!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****All routes to interact with support messages****

router.route('/support')
.post(async (req, res) => {
    //Validation
    const { error } = validate.support.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Create and save message to DB
    try{
        const message = new Support({...req.body, from: {name: req.user.name, id: req.user._id}});
        await message.save();
        res.json({error: false, message: 'Your message have been sent to support team!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/support/:id')
.get(async (req, res) => {
    try{
        const {topic, message, from} = await Support.findOne({_id: req.params.id});
        res.json({error: false, result: {from, topic, message}});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.delete(async (req, res) => {
    try{
        await Support.deleteOne({_id: req.params.id});
        res.json({error: false, message: 'Message to support successfully deleted!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****All routes for interection with projects****

router.route('/project')
.post(multer().single('file'), async (req, res) => {
    // Only SPO can create projects
    if (req.user.type !== "SPO") return res.status(400).json({error: true, message: 'Only SPO users can create projects'});
    //Validation
    let { error } = validate.project.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    if (req.file) {
        error = validate.file.validate(reg.file);
        if (error) return res.status(400).json({error: true, message: error.details[0].message});
    }
    //Save to Database
    try{
        const data = !req.file ? {...req.body, issuedBy: {name: req.user.name, id: req.user._id}} : {...req.body, issuedBy: {name: req.user.name, id: req.user._id}, file: req.file};
        const project = new DTO(data);
        project.save();
        res.json({error: false, message: 'Project successfully created!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/project/assign/:id')
.patch(async (req, res) => {
    // Only SPO can create projects
    if (req.user.type !== "SPO") return res.status(400).json({error: true, message: 'Only SPO users can submit bids'});
    console.log(req.body);
    //Validation
    let { error } = validate.performer.validate({name: req.body.from.name, id: req.body.from.id});
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Update project
    try{
        //Get SME info
        const sme = await User.findOne({_id: req.body.from.id});
        const spo = await User.findOne({_id: req.user._id});
        const bid = await Bid.findOne({_id: req.body.id});
        console.log(`sme wallet: ${sme.wallet}, spo wallet: ${spo.wallet}, sme amount: ${bid.price}, mnemonic: ${req.body.mnem}`);

        //sand money o escrow account
        paymentToEscrow(req.body.mnem, bid.price);

        //Update DTO
        await DTO.updateOne({_id: req.params.id}, {$set: {performer: {name: req.body.from.name, id: req.body.from.id}, status: 'inwork', reward: bid.price}});
        await Bid.deleteMany({'project.id': req.params.id});
        res.json({error: false, message: 'Performer successfully assigned!'});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/project/finish/:id')
.get(async (req, res) => {
    // Only SPO can create projects
    if (req.user.type !== "SPO") return res.status(400).json({error: true, message: 'Only SPO users can submit bids'});
    //Update project
    try{
        //Get SME info
        const dto = await DTO.findOne({_id: req.params.id})
        const sme = await User.findOne({_id: dto.performer.id});
        const spo = await User.findOne({_id: req.user._id});
        console.log(`sme wallet: ${sme.wallet}, spo wallet: ${spo.wallet} sme amount: ${dto.reward}`);

        //send money to SME from the escrow acc
        paymentFromEscrow(sme.wallet, dto.reward);

        //Update DTO
        await DTO.updateOne({_id: req.params.id}, {$set: {status: 'finished'}});
        res.json({error: false, message: 'Project successfully assigned as finished!'});
    } catch {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.route('/project/:id')
.get(async (req, res) => {
    const data = await Promise.all([
        DTO.findOne({_id: req.params.id}),
        Bid.find({"project.id": req.params.id})
    ])
    .then(async data => {
        if (req.user._id !== data[0].issuedBy.id) {
            await DTO.updateOne({_id: req.params.id}, {$inc: {views: 1}});
        }
        return {
            name: data[0].name,
            category: data[0].category,
            about: data[0].about,
            issuedBy: data[0].issuedBy.name,
            bids: data[1],
            date: data[0].date,
            until: data[0].until,
            views: data[0].views,
            budget: data[0].budget
        }
    })
    .catch(err => {
        return res.status(500).json({error: true, message: "Database operation error"});
    });

    res.json({error: false, message: data});
})
.delete(async (req, res) => {
    try{
        const dto = await DTO.deleteOne({_id: req.params.id});
        if (req.user._id !== dto.issuedBy.id) return res.status(400).json({error: true, message: "Only the onwer of project can remove it"});
        res.json({error: false, message: 'Poject successfully deleted!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

// ****Routes to leave feedback****

router.route('/feedback/:id')
.post(async (req, res) => {
    //Validation
    const { error } = validate.feedback.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    try{
        await User.updateOne({_id: req.params.id}, {
            $push: {feedbacks: {...req.body, from: {
                name: req.user.name,
                id: req.user._id
            }}}
        });
        res.json({error: false, message: 'Your feedback successfully placed!'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }
})
.all(notAllowedMethod);

router.all('/*', (req, res, next) => {
    res.status(400).json({error: true, message: "No such path!"});
});

module.exports = router;

async function getBasicProgramBytes(client) {
    const filePath = path.join(__dirname, 'paymentTransaction.teal');
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
    console.log('Transaction successful.');
    return completedTx;
  }

  /**
     * Log a bolded message to console
     */
function logBold(message) {
        console.log(`${utils.fmt.bold}${message}${utils.fmt.reset}`);
    }

    //payment from SPO to the escrow account
async function paymentToEscrow (accMnemonic, amount){

    //must have at least 201000 microAlgo to transfer asset
    let SPO_mnemonic = accMnemonic;//"action crunch limb peanut neglect swap address wild spare observe update game sketch move elite chest swim stone sudden palm sign right season abandon brush";  
    let SPO = algosdk.mnemonicToSecretKey(SPO_mnemonic);

    let SPO_info = (await algodClient.accountInformation(SPO.addr).do());
    //check user`s balance
    let minBalance = 201_000;
    assert(SPO_info.amount > minBalance, "Not enough tokens on the balance");
        
    const filePath = path.join('./assets/paymentTransaction.teal');
    const data = fs.readFileSync(filePath);
  
    // Compile teal
    const results = await algodClient.compile(data).do();
    const programBytes = new Uint8Array(
      Buffer.from(results.result, 'base64')
    );
  
    // create a logic signature
    const lsig = algosdk.makeLogicSig(programBytes);
    const receiver = lsig.address(); //escrow account

    // get suggested parameters
    const suggestedParams = await algodClient.getTransactionParams().do();

    // create a transaction
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: SPO.addr,
        to: receiver,
        amount,
        suggestedParams,
    });

    try{
        // sign transaction with logic signature
        const signedTxn = txn.signTxn(SPO.sk);
        const { txId: createTxId } = await algodClient
            .sendRawTransaction(signedTxn)
            .do();
        console.log("Successful payment");
    }
    catch(err)
    {
        console.log("Payment error");
    }

}

//payment from Escrow account to SME
async function paymentFromEscrow (SMEAddress, amount){
  const filePath = path.join('./assets/paymentTransaction.teal');
  const data = fs.readFileSync(filePath);

  // Compile teal
  const results = await algodClient.compile(data).do();
  // create logic sig
  const lsig = new algosdk.LogicSigAccount(new Uint8Array(Buffer.from(results.result, "base64")));

  let escrow_info = (await algodClient.accountInformation(lsig.address()).do());
  console.log("Asset of escrow: ");
  console.log(escrow_info.assets);

  let sender = lsig.address();
  let receiver = SMEAddress;
  let suggestedParams = await algodClient.getTransactionParams().do();

  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender,
    to: receiver,
    amount,
    suggestedParams,
  });

  try{
    // Create the LogicSigTransaction with contract account LogicSig 
    let rawSignedTxn = algosdk.signLogicSigTransactionObject(txn, lsig);
    let sendTx = await algodClient.sendRawTransaction(rawSignedTxn.blob).do();
    console.log("Transaction : " + sendTx.txId); 

    waitForConfirmation(algodClient, sendTx.txId);

    }
  catch(err){
    console.log("Payment error");
  }

}

// Function used to wait for a tx confirmation
const waitForConfirmation = async function (algodClient, txId) {
    let lastround = (await algodClient.status().do())['last-round'];
     while (true) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
        if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
          //Got the completed Transaction
          console.log('Transaction confirmed in round ' + pendingInfo['confirmed-round']);
          break;
        }
        lastround++;
        await algodClient.statusAfterBlock(lastround).do();
     }
  };