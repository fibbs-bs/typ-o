const router = require('express').Router();
const Schemas = require('../models/schemas');

router.get('/addUser', async (req,res)=>{
    const user = {
        nick: 'Orion',
        mail: 'oriori@gmail.com',
        passwordSalt: 'holamellamoorion'
    }
    const newUser = new Schemas["Users:"](user);

    try{
        await newUser.save( async (err,newUserResult) =>{
            console.log(`Usuario ${user.nick} creado!`);
            res.end('Nuevo usuario creado!');
        });
    }
    catch(err) {
        console.log(err);
        res.end("Usuario no añadido! Algo ocurrió mal")
    }

});

module.exports = router;