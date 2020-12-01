const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config();

//middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postRoute = require('./routes/post');

app.use('/data', postRoute);

//Routes
app.get('/',  (req, res)=>{
    res.send('Yeay!!');
    res.send('');
    res.send('How To use:');
    res.send('https://api12sbkkel9.herokuapp.com/data/ include this for get all');
    res.send('/n/ = Search by Name (Case Sensitive)');
    res.send('/m/ = Search by Merk (Case Sensitive)');
    res.send('/post = To add some data');
})



//Connect DB
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false }, ()=> console.log('connected'));

//listen to server
// app.listen(3001)

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
  });