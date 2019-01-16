const truckStopQuery = require('../queries/truckStops.query');

const getAllTruckStops = () => {
    let truckStops = truckStopQuery.getAllTruckStops();

    return truckStops.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneTruckStop = (id) => {
    let truckStop = truckStopQuery.getOneTruckStop(id)

    return truckStop.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const createTruckStop = (body) => {
    let truckStop = truckStopQuery.createTruckStop(body)

    return truckStop.then(result => {
        return !result
            ? { error: 'error creating truckStop', status: 404 }
            : result
    })
}

const deleteTruckStop = (id) => {
    let truckStop = truckStopQuery.deleteTruckStop(id)

    return truckStop.then(result => {
        return result
    })
}

module.exports = {
    // getAllTruckStops,
    // getOneTruckStop,
    createTruckStop,
    // deleteTruckStop
}