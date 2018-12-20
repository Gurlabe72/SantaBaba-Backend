const express = require('express');
const app = express();
const port = 3000;


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const mlabKey = require('./config/keys');
const db = mlabKey.mongoDbURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected Bitch...'))
    .catch((err) => console.log(err))
//using express to 'activate' body parser cors and morgan with App.use

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


app.listen(port, () => { console.log(`your mom is on port ${port}`) }) 
