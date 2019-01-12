//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
// const bcrypt = require('bcryptjs')
const { mConn, Users } = require('../schema/users.schema');

const getAllUsers = () => {
    return Users.find()
        .then(users => {
            return users
        })
}

// const getOneUser = (id) => {
//     return Users.findById({ _id: id })
//         .then(user => {
//             return user
//         })
// }

const findByEmail = (email) => {
    return Users.findOne({ _email: email })
        .then(user => {
            return user
        })
}
const createUser = (userInfo) => {
    // console.log(userInfo, '#####')
    const newUser = new Users({
        username: userInfo.username,
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
        // isDriver: userInfo.isDriver,
        // date: Date.now
    })
    mConn.collection(drivers).insert(newUser)
    newUser.save(function (err) {
        if (err) {
            return next(err);
        }
        return
    })
    return newUser;
}

// const deleteUser = (id) => {
//     return Users.findById({ _id: id })
//         .then(user => {
//             return !user ? { status: 404, error: 'user not found' } : user.remove()
//         })
// }
module.exports = {
    getAllUsers,
    // getOneUser,
    findByEmail,
    createUser,
    // deleteUser
}