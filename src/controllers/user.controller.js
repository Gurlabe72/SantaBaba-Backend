//in the controllers folder, this is  take care our err handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 
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
    const id = req.params;
    let promise = model.getOneUser(id)

    promise.then(result => {
        return result.err ? next(result) : res.status(200).json(result)
    })
    promise.catch(err => {
        next(err)
    })
}
module.exports = {
    getAllUsers,
    getOneUser
}