const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactSchema = new Schema({
    name : {
        type: 'string',
        required: true,
    },
    email : {
        type: 'string',
        required: true,
    },
    Comment:{
        type: 'string',
        required: true,
    }
})

const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;