const model = require('../models//users.model')

const getAllUsers = (req, res, next) => {
    let promise = model.getAllUsers()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}

const getOneUser = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneUser(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const createUser = (req, res, next) => {
    const body = req.body;

    let promise = model.createUser(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })

}
const deleteUser = (req, res, next) => {
    const id = req.params.id;
    let promise = model.deleteUser(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser
}