require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://mongo:27017/communityDB', {useNewUrlParser: true, useUnifiedTopology: true});


// App
const app = express();
app.use(cors());



app.get('/', (req, res) => {   
    res.json('Hello World test12');
});

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);