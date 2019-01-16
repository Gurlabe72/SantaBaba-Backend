const express = require('express');
const app = express();
const port = 3333;


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
const locations = require('./src/routes/locations.route');
const truckStops = require('./src/routes/truckStops.route')
//const onTheRoad = require('./src/routes/onTheRoad.route')
// const shippingDocks = require('./src/routes/shippingDocks')


const mlabKey = require('./src/config/keys');
const db = require('./src/config/keys');

mongoose
    // .connect(db.mongoURI, { useNewUrlParser: true })
    .connect(db.mongoURI)
    .then(() => console.log('MongoDB is connected Bitch...', db))
    .catch((err) => console.log(err))


//Passport Middleware 
app.use(passport.initialize());
//passport config
require('./src/config/passport')(passport);
//using express to 'activate' body parser cors and morgan with App.use
app.use('/users', users)
app.use('/locations', locations)
app.use('/truckStops', truckStops)
//app.use('shippingDocks', shippingDocks)
//app.use('/onTheRoad', onTheRoad)


app.use((err, req, res, next) => {
    res.status(err.status).json(err)
})

app.listen(port, () => console.log(`your mom is on port ${port}`)) 
