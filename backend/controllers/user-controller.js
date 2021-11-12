const router = require('express').Router();
const Schemas = require('../models/schemas');

const ctrl = {};

ctrl.signup = async (req,res)=>{
    const {nick,mail,pass,confirmationPass} = req.body;

    if (pass == confirmationPass){
        
    }
    else{
        res.status(300).send("Las contraseñas no coinciden");
    }

    const user = {
        nick: nick,
        mail: mail,
        passwordSalt: pass
    }
    const newUser = new Schemas["Users:"](user);

    try{
        await newUser.save();
        res.status(200).send(newUser);
    }
    catch(err) {
        if (err.code == 1100) res.status(300).send("El nick ya existe");
        else res.status(500).end("Error");
    }

    module.exports = ctrl;
};