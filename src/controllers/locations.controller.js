const model = require('../models/locations.model');

const getAllLocations = (req, res, next) => {
    let promise = model.getAllLocations()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneLocation = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneLocation(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const createLocation = (req, res, next) => {
    const body = req;

    let promise = model.createLocation(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })
}

const deleteLocation = (req, res, next) => {
    const id = req.params.id;
    let promise = model.deleteLocation(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    deleteLocation
}