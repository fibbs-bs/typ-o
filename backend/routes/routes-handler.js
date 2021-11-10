const router = require('express').Router();
const Schemas = require('../models/schemas');

router.get('/addUser', async (req,res)=>{
    const user = {
        nick: 'a_hognose_snake',
        mail: 'a_hognose_snake@gmail.com',
        passwordSalt: 'megustaeluwu'
    }
    const newUser = new Schemas["Users:"](user);

    try{
        await newUser.save();
        res.status(200).send(newUser);
    }
    catch(err) {
        res.status(500).end("Error");
    }

});

module.exports = router;