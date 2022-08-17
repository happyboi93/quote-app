const mongoose = require('mongoose')

const DB_CONNECT =(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('datbase connected'))
    .catch(e=> console.log(e)
)}

module.exports = DB_CONNECT;