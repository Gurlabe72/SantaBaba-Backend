//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
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

const deleteUser = (id) => {
    return Users.findById({ _id: id })
        .then(user => {
            return !user ? { status: 404, error: 'user not found' } : user.remove()
        })
}
module.exports = {
    getAllUsers,
    getOneUser,
    deleteUser
}