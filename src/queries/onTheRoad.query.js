//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const OnTheRoads = require('../schema/onTheRoad.schema');

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

const createOnTheRoad = (payload) => {
    console.log(payload, "we are iun the query")
    const newOnTheRoad = new OnTheRoads({
        userId: payload.userId,
        childId: payload.childId,
        nicePost: payload.nicePost,
        description: payload.description,
        score: payload.score
    })
    console.log(newOnTheRoad)
    newOnTheRoad.save().catch(error => console.log(error)
    )

    return newOnTheRoad;
}

const deleteOnTheRoad = (id) => {
    return OnTheRoads.findById({ _id: id })
        .then(onTheRoad => {
            return !onTheRoad ? { status: 404, error: 'onTheRoad not found' } : onTheRoad.remove()
        })
}
module.exports = {
    getAllOnTheRoads,
    getOneOnTheRoad,
    createOnTheRoad,
    deleteOnTheRoad
}