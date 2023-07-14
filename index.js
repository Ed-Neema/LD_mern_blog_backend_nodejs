const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const authRouter = require("./routes/auth")
const usersRouter = require("./routes/users")
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use(errorHandler);
const port = process.env.PORT || 5000;

connectDB();
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})