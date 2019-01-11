//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const Locations = require('../schema/locations.schema');

const getAllLocations = () => {
    return Locations.find()
        .then(locations => {
            return locations
        })
}

const getOneLocation = (id) => {
    return Locations.findById({ _id: id })
        .then(location => {
            return location
        })
}

const createLocation = (id) => {
    let Location = locationQuery.getlocation(id);

    return Location.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const deleteLocation = (id) => {
    return Locations.findById({ _id: id })
        .then(location => {
            return !location ? { status: 404, error: 'location not found' } : location.remove()
        })
}
module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    deleteLocation
}