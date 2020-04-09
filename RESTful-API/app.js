const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Middleware
// app.use('/posts', () => {
//     console.log('This is middleware running');
// })

//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});
app.get('/posts', (req, res) => {
    res.send('We are on posts');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {console.log('connected to database');
});


app.listen(3000, () => {
    console.log('server started');
});