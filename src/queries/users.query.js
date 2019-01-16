const Users = require('../schema/users.schema');

const createUser = (userInfo) => {
    const newUser = new Users({
        username: userInfo.username,
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        isDriver: userInfo.isDriver,
        date: new Date()
    })
    return newUser.save()
        .then(user => user)
}

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