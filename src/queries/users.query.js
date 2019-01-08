//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const bcrypt = require('bcryptjs')
const Users = require('../schema/users.schema');

const getAllUsers = () => {
    return Users.find()
        .then(users => {
            return users
        })
}

const getOneUser = (id) => {
    return Users.findById({ _id: id })
        .then(user => {
            return user
        })
}

const findByEmail = (email) => {
    return Users.findOne({ _email: email })
        .then(user => {
            return user
        })
}
const createUser = (payload) => {

    const newUser = new Users({
        username: payload.username,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password2: payload.password2
    })

    newUser.save().catch(error => error)

    return newUser;
}

const deleteUser = (id) => {
    return Users.findById({ _id: id })
        .then(user => {
            return !user ? { status: 404, error: 'user not found' } : user.remove()
        })
}
module.exports = {
    getAllUsers,
    getOneUser,
    findByEmail,
    createUser,
    deleteUser
}