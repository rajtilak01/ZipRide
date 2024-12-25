const dotenv = require('dotenv')
dotenv.config();

const express = require("express");
const cors = require('cors')
const app = express();
const connectToDB = require("./db/db")
app.use(cors());

connectToDB();
app.get('/', (req, res)=>{
    res.send("Hello world")
})

module.exports = app;