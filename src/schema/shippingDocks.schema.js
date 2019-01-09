//With the MERN STACK THE Schemas page is
//Where you put your 'Schemas' 
//This is what a basic users SCHEMA would 
//look like. 
//DISREGARD THE TOKEN FOR NOW 
//the NODE module 'mongoose' is used in SCHEMA 
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ShippingDocksSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    childId: [{
        type: Schema.Types.ObjectId,
        ref: 'child'
    }],
    timeIn: {
        type: String,
        required: true
    },
    delayTime: {
        type: String,
        required: true
    },
    amenities: {
        type: Number,
        min: 0, max: 10000
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ShippingDock = mongoose.model('shippingDocks', ShippingDocksSchema);