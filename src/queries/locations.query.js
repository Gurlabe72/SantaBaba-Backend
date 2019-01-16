const Locations = require('../schema/locations.schema');

const createLocation = (locationInfo) => {
    const newLocation = new Locations({
        location: locationInfo.location,
        postType: locationInfo.postType,
        date: new Date()
    })
    return newLocation.save()
        .then(location => location);
}

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


const deleteLocation = (id) => {
    return Locations.findById({ _id: id })
        .then(location => {
            return !location ? { status: 404, error: 'location not found' } : location.remove()
        })
}

module.exports = {
    createLocation,
    getAllLocations,
    getOneLocation,
    deleteLocation
}