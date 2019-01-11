//With the MERN STACK THE Schemas page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in SCHEMA 
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const LocationsSchema = new Schema({
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    //for now 
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Locations = mongoose.model('locations', LocationsSchema);