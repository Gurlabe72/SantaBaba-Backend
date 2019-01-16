const model = require('../models/onTheRoad.model')
//in the controllers folder, this is  take care our err handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 

const createOnTheRoad = (req, res, next) => {
    const body = req.body;
    let promise = model.createOnTheRoad(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })
}

const getAllOnTheRoads = (req, res, next) => {
    let promise = model.getAllOnTheRoads()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneOnTheRoad = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneOnTheRoad(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}

const deleteOnTheRoad = (req, res, next) => {
    const id = req.params.id;
    let promise = model.deleteOnTheRoad(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    createOnTheRoad
    // getAllOnTheRoads,
    // getOneOnTheRoad,
    // deleteOnTheRoad
}