//With the MERN STACK THE Models page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in MODELS 


const mongoose = require('mongoose');
const Users = require('./Users');
const Schema = mongoose.Schema


const UsersSchema = new Schema({
    username: {
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
    token: [],
    followers: [],
    following: [],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Users = mongoose.model('users', UsersSchema);