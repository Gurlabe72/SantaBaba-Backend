const mongoose = require('mongoose');
const Schema = mongoose.Schema


const OnTheRoadsSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    locationId: [{
        type: Schema.Types.ObjectId,
        ref: 'location'
    }],
    accidents: {
        type: String,
        required: true
    },
    hazards: {
        type: String,
        required: true
    },
    delays: {
        type: String,
        required: true
    },
    scaleOpen: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = OnTheRoad = mongoose.model('onTheRoad', OnTheRoadsSchema);