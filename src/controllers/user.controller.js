const model = require('../models/users.model')
//checking for validation
const validateRegisterInput = require("../validation/validation.register");
// const validateLoginInput = require("../../validation/validation.login");

const createUser = (req, res, next) => {
    const body = req.body;
    let promise = model.createUser(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
const getAllUsers = (req, res, next) => {
    let promise = model.getAllUsers()

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
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
    createUser,
    getOneUser,
    getAllUsers,
    deleteUser
}