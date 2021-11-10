const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_URI,{
    //useNewUrlParse: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected!")
})
.catch((err)=>{
    console.log(err);
})
;

module.exports = mongoose;