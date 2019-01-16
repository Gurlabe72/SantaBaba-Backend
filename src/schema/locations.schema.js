const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LocationsSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    location: {
        type: String,
        required: true
    },
    postType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = Locations = mongoose.model('locations', LocationsSchema);

