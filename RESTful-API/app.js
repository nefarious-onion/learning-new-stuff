const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

//Import routes
const postRoute = require('./routes/posts')

app.use('/posts', postRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {console.log('connected to database');
});


app.listen(3000, () => {
    console.log('server started');
});