const model = require('../models/shippingDocks.model')
//in the controllers folder, this is  take care our err handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 
const getAllShippingDocks = (req, res, next) => {
    let promise = model.getAllShippingDocks()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneShippingDock = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneShippingDock(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}

const createShippingDock = (req, res, next) => {
    const body = req.body;
    console.log(body)
    let promise = model.createShippingDock(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })
}

const deleteShippingDock = (req, res, next) => {
    const id = req.params.id;
    let promise = model.deleteShippingDock(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    // getAllShippingDocks,
    // getOneShippingDock,
    createShippingDock,
    // deleteShippingDock
}