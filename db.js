const mongoose = require('mongoose');
const mongooseURI = 'mongodb+srv://akhtarwaqar384:Khan1234@cluster0.18um84d.mongodb.net/Contact?retryWrites=true&w=majority'

const ConnectToMongoose = ()=>{
    mongoose.connect(mongooseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    },()=>{
            console.log('Connected to Mongoose');
    })
}

module.exports = ConnectToMongoose;