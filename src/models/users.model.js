
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
module.exports = {
    getAllUsers,
    getOneUser
}