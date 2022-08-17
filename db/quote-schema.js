const mongoose = require('mongoose')

const quoteModel = mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        require:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('quote',quoteModel);