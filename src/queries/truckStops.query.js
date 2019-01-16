//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const TruckStops = require('../schema/truckStops.schema');

const createTruckStop = (payload) => {
    const newTruckStop = new TruckStops({
        userId: payload.userId,
        locationId: payload.locationId,
        gasPrice: payload.gasPrice,
        parkingFee: payload.parkingFee,
        amenities: payload.amenities,
        comments: payload.comments
    })
    console.log(newtruckStop)
    newtruckStop.save().catch(error => console.log(error)
    )

    return newtruckStop;
}

const getAllTruckStops = () => {
    return truckStops.find()
        .then(truckStops => {
            return truckStops
        })
}

const getOneTruckStop = (id) => {
    return TruckStops.findById({ _id: id })
        .then(truckStop => {
            return truckStop
        })
}


const deleteTruckStop = (id) => {
    return truckStops.findById({ _id: id })
        .then(truckStop => {
            return !truckStop ? { status: 404, error: 'truckStop not found' } : truckStop.remove()
        })
}
module.exports = {
    // getAllTruckStops,
    // getOneTruckStop,
    createTruckStop,
    // deleteTruckStop
}