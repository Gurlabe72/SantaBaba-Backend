const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//dependencies 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


//routes endpoints
const users = require('./src/routes/users.route');
//const posts = require('./src/routes/posts.route');


// const mlabKey = require('../config/keys');
const db = require('./src/config/keys');
console.log(db)

console.log(db)
mongoose.connect(db.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected Bitch...'))
    .catch((err) => console.log(err))

//Passport Middleware 
app.use(passport.initialize());
//passport config
require('./src/config/passport')(passport);
//using express to 'activate' body parser cors and morgan with App.use
app.use('/users', users)
app.use('/register', users)
app.use((err, req, res, next) => {
    res.status(err.status).json(err)
})
//app.use('/child', posts)



app.listen(port, () => { console.log(`your mom is on port ${port}`) }) 
