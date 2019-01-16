const model = require('../models/truckStops.model')
//in the controllers folder, this is  take care our err handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 
const getAllTruckStops = (req, res, next) => {
    let promise = model.getAllTruckStops()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneTruckStop = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneTruckStop(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}

const createTruckStop = (req, res, next) => {
    const body = req.body;
    console.log(body)
    let promise = model.createTruckStop(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })
}

const deleteTruckStop = (req, res, next) => {
    const id = req.params.id;
    let promise = model.deleteTruckStop(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    // getAllTruckStops,
    // getOneTruckStop,
    createTruckStop
    // deleteTruckStop
}