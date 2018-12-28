
const userQuery = require('../queries/users.query');

const getAllUsers = () => {
    let users = userQuery.getAllUsers();

    return users.then(result => {
        return result.length < 1 ?
            { error: 'error message', status: 404 } :
            result
    })
}

module.exports = {
    getAllUsers
}