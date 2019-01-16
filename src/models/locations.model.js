const locationQuery = require('../queries/locations.query');

const createLocation = (locationInfo) => {
    let location = locationQuery.createLocation(locationInfo)

    return location.then(result => {
        return !result
            ? { error: 'error creating location', status: 404 }
            : result
    })
}

const getAllLocations = () => {
    let locations = locationQuery.getAllLocations();
    return locations.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneLocation = (id) => {
    let location = locationQuery.getOneLocation(id)

    return location.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

// const deleteLocation = (id) => {
//     let location = locationQuery.deleteLocation(id)

//     return location.then(result => {
//         return result
//     })
// }

module.exports = {
    createLocation,
    getAllLocations,
    getOneLocation
    // deleteLocation
}