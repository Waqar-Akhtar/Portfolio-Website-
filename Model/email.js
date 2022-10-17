const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmailSchema = new Schema({
    email : {
        type: 'string',
        required: true
    }
   
})

const Email = mongoose.model('Email', EmailSchema);
module.exports = Email;