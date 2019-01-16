//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const OnTheRoads = require('../schema/onTheRoad.schema');


const createOnTheRoad = (onTheRoadInfo) => {
    console.log(onTheRoadInfo, "we are iun the query")
    const newOnTheRoad = new OnTheRoads({
        userId: onTheRoadInfo.userId,
        locationId: onTheRoadInfo.locationId,
        accidents: onTheRoadInfo.accidents,
        hazards: onTheRoadInfo.hazards,
        delays: onTheRoadInfo.delays,
        scaleOpen: onTheRoadInfo.scaleOpen,
        date: new Date()
    })
    console.log(newOnTheRoad)
    newOnTheRoad.save().catch(error => console.log(error)
    )

    return newOnTheRoad;
}

const getAllOnTheRoads = () => {
    return OnTheRoads.find()
        .then(onTheRoads => {
            return onTheRoads
        })
}

const getOneOnTheRoad = (id) => {
    return OnTheRoads.findById({ _id: id })
        .then(onTheRoad => {
            return onTheRoad
        })
}


const deleteOnTheRoad = (id) => {
    return OnTheRoads.findById({ _id: id })
        .then(onTheRoad => {
            return !onTheRoad ? { status: 404, error: 'onTheRoad not found' } : onTheRoad.remove()
        })
}
module.exports = {
    createOnTheRoad
    // getAllOnTheRoads,
    // getOneOnTheRoad,
    // deleteOnTheRoad
}