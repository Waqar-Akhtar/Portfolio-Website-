const mongoose = require('mongoose');
require('dotenv').config()

const ConnectToMongoose = ()=>{
    mongoose.connect(process.env.mongooseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    },()=>{
            console.log('Connected to Mongoose');
    })
}

module.exports = ConnectToMongoose;