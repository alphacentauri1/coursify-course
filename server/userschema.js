const mongoose = require('mongoose');

const usercourse = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    courses:{
        type:[String],
        required: true,
    },
    spent:{
        type: Number,
    }
})

module.exports = usercourse;