const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://chronos101:kricket14@cluster0.uem2a9a.mongodb.net/?retryWrites=true&w=majority")
    }
    catch(err){
        console.log("brooo")
        console.log(err);
    }
}

module.exports = connectDB;