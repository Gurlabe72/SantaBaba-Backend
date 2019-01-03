
const userQuery = require('../queries/users.query');

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
// const createUser = (userInfo, hashPassword) => {
//     let user = userQuery.createUser(userInfo, hashPassword)

//     return user.then(result => {
//         return !result
//             ? { error: 'error creating user', status: 404 }
//             : result
//     })
// }

const deleteUser = (id) => {
    let user = userQuery.deleteUser(id)

    return user.then(result => {
        return result
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    // createUser,
    deleteUser
}