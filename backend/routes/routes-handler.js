const router = require('express').Router();
const userctrl = require('../controllers/user-controller');
const paragraphctrl = require('../controllers/paragraph-controller')

router.post(
    '/user/add',
    (req,res) =>{ 
        userctrl.signup(req,res)
    }
);

router.get( //Send a paragraph, the paragraph can have random words or be a book paragraph.
    //for random paragraph {context=random}
    //you can send the language, if not, default is EN
    '/paragraph/random',
    (req,res)=>{
        paragraphctrl.randomParagraph(req,res)
    }
);


 
module.exports = router;