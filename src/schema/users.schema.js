//With the MERN STACK THE Schemas page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in SCHEMA 
const db = require('../config/keys');
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mConn = mongoose.connection;
mongoose
    .connect(db.mongoURI)
    .then(() => console.log('MongoDB is connected Bitch...', db))
    .catch((err) => console.log(err))

const UsersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDriver: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date
    }
});

const Users = mongoose.model('users', UsersSchema)
module.exports = {
    Users,
    mConn
} 
