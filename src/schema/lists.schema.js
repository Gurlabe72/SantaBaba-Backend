//With the MERN STACK THE Schemas page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in SCHEMA 
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ListsSchema = new Schema({
    username: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    child: [{
        type: Schema.Types.ObjectId,
        ref: 'child'
    }],
    NaughtyPost: {
        type: String,
        required: false
    },
    NicePost: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Lists = mongoose.model('lists', ListsSchema);