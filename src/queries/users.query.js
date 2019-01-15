const { mConn, Users } = require('../schema/users.schema');
const createUser = (userInfo) => {

    const newUser = new Users({
        username: userInfo.username,
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
        // isDriver: userInfo.isDriver,
        // date: Date.now
    })
    mConn.collection('users').insert(newUser)
    newUser.save(function (err) {
        if (err) {
            return err;
        }
        return
    })
    return newUser;
}

const getAllUsers = () => {
    console.log('query');

    return Users.find()
        .then(users => {
            console.log('users query', users);

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