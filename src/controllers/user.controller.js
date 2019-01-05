const model = require('../models/users.model')
//checking for validation
const validateRegisterInput = require("../validation/validation.register");
// const validateLoginInput = require("../../validation/validation.login");


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

    const { errors, isValid } = validateRegisterInput(body);
    //Checking validation
    if (!isValid) {
        return res.status(400).json(errors)
    }
    delete body.password2
    let promise = model.createUser(body);

    promise.then(result => {
        console.log(result, "CARRLL OVER HERE")
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a User' })
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