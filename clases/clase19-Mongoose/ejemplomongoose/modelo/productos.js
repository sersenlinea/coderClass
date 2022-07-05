const mongoose = require('mongoose')
const productos = new mongoose.Schema({
    code:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    },
    img:{
        type:String,
        trim:true
    }

});
module.exports = mongoose.model('productos',productos);