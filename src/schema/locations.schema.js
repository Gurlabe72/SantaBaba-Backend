const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LocationsSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    location: {
        type: String,
        required: false
    },
    postType: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    accidents: {
        type: String,
        required: false
    },
    hazards: {
        type: String,
        required: false
    },
    delays: {
        type: String,
        required: false
    },
    scaleOpen: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },

    timeIn: {
        type: String,
        required: false
    },
    //calculated on the front end
    delayTime: {
        type: String,
        required: false
    },
    amenities: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    gasPrice: {
        type: Number,
        min: 0, max: 10000
    },
    parking: {
        type: Number,
        min: 0, max: 10000
    },
    amenities: {
        type: String,
        required: false
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

module.exports = Locations = mongoose.model('locations', LocationsSchema);

