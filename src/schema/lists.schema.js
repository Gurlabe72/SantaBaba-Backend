//With the MERN STACK THE Schemas page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in SCHEMA 
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ListsSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    childId: [{
        type: Schema.Types.ObjectId,
        ref: 'child'
    }],
    gasPrice: {
        type: String,
        required: true
    },
    parkingFee: {
        type: Number,
        min: 0, max: 10000
    },
    amenities: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Lists = mongoose.model('lists', ListsSchema);