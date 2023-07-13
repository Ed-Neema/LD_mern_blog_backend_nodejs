const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})