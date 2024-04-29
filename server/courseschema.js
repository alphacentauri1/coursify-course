const mongoose = require('mongoose');

const courser = new mongoose.Schema({
    cname:{
        type: String,
        required: true,
    }, 
    _id:{
        type: String, 
        required: true,
    },
    hours:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    tag:{
        type: String, 
        required: true,
    },
    handler:{
        type: String,
        required: true,
    }, 
    price:{
        type: Number,
        required: true,
    }, 
    img:{
        type: String,
        required: true,
    },
    link:{
        type: String, 
        required: true
    }
})

module.exports = courser;