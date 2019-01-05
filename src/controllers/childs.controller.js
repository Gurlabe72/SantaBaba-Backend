const model = require('../models/childs.model');

const getAllChilds = (req, res, next) => {
    let promise = model.getAllChilds()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneChild = (req, res, next) => {
    const id = req.params.id;
    let promise = model.getOneChild(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const createChild = (req, res, next) => {
    const body = req;

    let promise = model.createChild(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })

}
const deleteChild = (req, res, next) => {
    const id = req.params;
    let promise = model.deleteChild(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    getAllChilds,
    getOneChild,
    createChild,
    deleteChild
}