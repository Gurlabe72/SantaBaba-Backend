const mongoose = require('mongoose');
const Schema = mongoose.Schema


const OnTheRoadsSchema = new Schema({
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    childId: [{
        type: Schema.Types.ObjectId,
        ref: 'child'
    }],
    //accidents hazards and delays 
    traffic: {
        type: String,
        required: true
    },
    scaleOpen: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Lists = mongoose.model('onTheRoad', OnTheRoadsSchema);