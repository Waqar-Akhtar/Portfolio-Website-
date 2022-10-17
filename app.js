const mongoose = require('mongoose');
const express = require('express');
const ConnectToMongoose = require('./db');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
ConnectToMongoose();

app.use('/', require('./Routes/contactus'))



if(process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"))
}

app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
});