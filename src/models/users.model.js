
const userQuery = require('../queries/users.query');
const bcrypt = require('bcryptjs');

const getAllUsers = () => {
    let users = userQuery.getAllUsers();

    return users.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

// const getOneUser = (id) => {
//     let user = userQuery.getOneUser(id)

//     return user.then(result => {
//         return result === null ?
//             { err, status: 404 } :
//             result
//     })
// }

const createUser = async (userInfo) => {
    // console.log(userInfo, "im in the users model")
    const emailTaken = await userQuery.findByEmail({ email: userInfo.email })
    // console.log(emailTaken)
    if (emailTaken) return { error: 'email is already taken', status: 404 }

    let hashPassword = await bcrypt.hash(userInfo.password, 10)
    userInfo.password = hashPassword
    // console.log(userInfo)
    const user = await userQuery.createUser(userInfo)
    return !user ? { error: 'error creating user' } : user

}


// const deleteUser = (id) => {
//     let user = userQuery.deleteUser(id)

//     return user.then(result => {
//         return result
//     })
// }

module.exports = {
    getAllUsers,
    // getOneUser,
    createUser,
    // deleteUser
}