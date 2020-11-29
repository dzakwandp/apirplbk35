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
})



//Connect DB
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false }, ()=> console.log('connected'));

//listen to server
// app.listen(3000)

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
  });