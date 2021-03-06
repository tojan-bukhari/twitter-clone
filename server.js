const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
// var fs = require('fs');
// var path = require('path');
const port = 1200;
require('dotenv').config();
var morgan = require('morgan')

//Bring in the models
require("./models/usermodel");

//The route 
const userRoute =require('./routes/userRoute')
const authRoute  = require('./routes/auth');

//middleware
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));

app.use('/api', authRoute);
app.use('/user', userRoute )


const mongoose = require('mongoose')
mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});