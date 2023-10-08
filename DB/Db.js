const mongoose = require('mongoose');
 

mongoose.connect('mongodb://localhost:27017/STP-07-07', {useNewUrlParser :  true})


const db = mongoose.connection


db.once('open' ,  () =>{ console.log("Successfully Connected With MongoDB")})
db.on('error' ,  ()=>{console.log("Not Connected With Database")})




module.exports =  db