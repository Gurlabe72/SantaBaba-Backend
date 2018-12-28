//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const Users = require('../schemas/user.schemas');

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

module.exports = {
    getAllUsers,
    getOneUser
}