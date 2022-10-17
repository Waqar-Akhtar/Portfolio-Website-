const express = require('express');
const Router = express.Router();
const Contact = require('../Model/Contactus');
const Email = require('../Model/email');

Router.post('/contactus',   (req, res)=>{
    const {name , email, Comment} = req.body;
    
    
    try {
        if(!name || !email || !Comment){
            res.status(404).json('Please fill all the fields');
        }else{
        
        const contact =   new Contact({
            name: name,
            email: email,
            Comment: Comment
    })
         contact.save();
         res.status(200).json('Data Save Succesfully')
        }
    } catch (err) {
        res.status(500).json(err);
    }

   
})

Router.post('/email', (req, res)=>{
    const {email} = req.body
    
    try {
        if(!email){
            res.status(404).json('please enter a valid email');
        }else{
        const email1 = new Email({
            email: email
        })
        email1.save();
        res.json('email save successfully')
    }
    } catch (err) {
        res.status(500).json('Server error')
    }
    
    
})
module.exports = Router