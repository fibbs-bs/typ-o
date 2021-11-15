const router = require('express').Router();
const User = require('../models/schemas')["Users:"];

const ctrl = {};

ctrl.signup = async (req,res)=>{

    const nick = req.body.nick;
    const mail = req.body.mail;
    const pass = req.body.pass;

    const emailUser = await User.findOne({mail: mail});

    if (emailUser){
        res.status(406).send(emailUser.mail+" ya está asociado a otro usuario!");
    }
    else{
        const newUser = new User({
            nick,
            mail,
            pass
        });
        newUser.passwordSalt = pass;
        newUser.passwordHash = await newUser.hashPassword(pass);
        
        try{
            await newUser.save();
            res.status(200).send(newUser);
        }
        catch(err) {
            if (err.code == 11000) res.status(300).send("El nick ya existe.\n"+err.name);
            else res.status(500).end(err.name);
        }
    };
};


module.exports = ctrl;