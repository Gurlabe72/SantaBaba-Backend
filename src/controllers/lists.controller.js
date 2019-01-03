//in the controllers folder, this is  take care our err handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 
const getAllLists = (req, res, next) => {
    let promise = model.getAllLists()

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
const getOneList = (req, res, next) => {
    const id = req.params;
    let promise = model.getOneList(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}

const createList = (req, res, next) => {
    const body = req;

    let promise = model.createList(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json({ result, message: 'created a post' })
    })
    promise.catch(error => {
        next(error)
    })

}
const deleteList = (req, res, next) => {
    const id = req.params;
    let promise = model.deleteList(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    getAllLists,
    getOneList,
    createList,
    deleteList
}