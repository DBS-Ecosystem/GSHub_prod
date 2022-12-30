const router = require('express').Router();
const Feed = require('../models/Feed');
const validate = require('../validation');

const notAllowedMethod = (req, res) => {
    res.status(400).json({error: true, message: "Method not allowed!"});
}

router.route('/feed')
.post(async (req, res) => {
    //Validation
    const { error } = validate.feed.validate(req.body);
    if (error) return res.status(400).json({error: true, message: error.details[0].message});
    //Create and save message to DB
    try{
        const message = new Feed(req.body);
        await message.save();
        res.json({error: false, message: 'New feed have been created'});
    } catch(err) {
        res.status(500).json({error: true, message: "Database operation error"});
    }   
})
.all(notAllowedMethod);

router.all('/*', (req, res, next) => {
    res.status(400).json({error: true, message: "No such path!"});
});

module.exports = router;