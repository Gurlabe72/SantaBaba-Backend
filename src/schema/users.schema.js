const mongoose = require('mongoose');
const Schema = mongoose.Schema

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

module.exports = Users = mongoose.model('users', UsersSchema)
