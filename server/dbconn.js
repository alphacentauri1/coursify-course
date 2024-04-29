const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://");
    }
    catch(err){
        console.log("brooo")
        console.log(err);
    }
}

module.exports = connectDB;