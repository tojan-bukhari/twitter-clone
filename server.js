const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
const port = 4000;
require('dotenv').config();
var morgan = require('morgan')


//The route 
// const itemRoute  = require('./routes/itemRoute');

//middleware
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));
// app.use(itemRoute);


const mongoose = require('mongoose')
mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
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