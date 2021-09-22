var express = require("express");
var mongoose = require("mongoose");

var app = express();
var cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(cookieParser());


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));



mongoose.connect("mongodb+srv://mark:mark123@cluster0.tkd00.mongodb.net/userservice?retryWrites=true&w=majority",() =>{
    console.log("User Database Connected");
});

var route3 = require('./routes/auth');
app.use('/', route3)

var route3 = require('./routes/staff');
app.use('/', route3)


app.listen(3001,() => {
    console.log('Listening to port for requests');
})

