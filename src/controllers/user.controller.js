//in the controllers folder, this is  take care our error handling here with the 
//.then .catch fucntions with the  appropriate errror numbers 
const getAllUsers = (req, res, next) => {
    let promise = model.getAllUsers()

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

module.exports = {
    getAllUsers,
}