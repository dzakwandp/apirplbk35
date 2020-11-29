const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/post');

app.use('/data', postRoute);

//Routes
app.get('/',  (req, res)=>{
    res.send('Yeay!!');
})



//Connect DB
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, ()=> console.log('connected'));

//listen to server 
app.listen(3000);