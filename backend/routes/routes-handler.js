const router = require('express').Router();
const userctrl = require('../controllers/user-controller');


router.post(
    '/addUser',
    (req,res) =>{ 
        userctrl.signup(req,res)
    }
);



 
module.exports = router;