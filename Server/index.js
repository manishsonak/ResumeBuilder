/* eslint-disable no-undef */
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();

const app=express();
const port=3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: ['Content-Type', 'Authorization']
  }));

app.use(express.json())


app.use('/auth',require('./routes/auth'))

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})