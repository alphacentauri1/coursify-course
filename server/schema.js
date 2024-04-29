const mongoose = require('mongoose');

const acc = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    _id: {
        type: String,
        required: true,

    },
    email : {
        type:String,
        required: true,
    },
    phone :{
        type: String,
        required: true,
        
    },

    pswd :{
        type:String,
        required: true,
    }

    
})

module.exports = acc