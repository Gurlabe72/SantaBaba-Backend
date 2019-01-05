
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

const getOneUser = (id) => {
    let user = userQuery.getOneUser(id)

    return user.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

// const createUser = (userInfo) => {
//     return userQuery.findByEmail({ email: userInfo.email })
//         .then(user => {
//             if (user) {
//                 return { email: "email already exists" }
//             } else {
//                 let user = userQuery.createUser(userInfo)
//                 console.log("HEY CARRRLLL !! ", user);
//                 return user.then(result => {
//                     return !result
//                         ? { error: 'error creating user', status: 404 }
//                         : result
//                 })
//             }
//         })
// }
const createUser = async (userInfo) => {
    const emailTaken = await userQuery.findByEmail({ email: userInfo.email })
    console.log(emailTaken)
    if (emailTaken) return { error: 'email is already taken', status: 404 }

    let hashPassword = await bcrypt.hash(userInfo.password, 10)
    userInfo.password = hashPassword
    const user = await userQuery.createUser(userInfo)
    console.log(await user)
    return !user ? { error: 'error creating user' } : user

}


const deleteUser = (id) => {
    let user = userQuery.deleteUser(id)

    return user.then(result => {
        return result
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser
}