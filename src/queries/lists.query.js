//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const Lists = require('../schema/lists.schema');

const getAllLists = () => {
    return Lists.find()
        .then(lists => {
            return lists
        })
}

const getOneList = (id) => {
    return Lists.findById({ _id: id })
        .then(list => {
            return list
        })
}

const createList = (payload) => {
    console.log(payload, "we are iun the query")
    const newList = new Lists({
        userId: payload.userId,
        childId: payload.childId,
        nicePost: payload.nicePost,
        description: payload.description,
        score: payload.score
    })
    console.log(newList)
    newList.save().catch(error => console.log(error)
    )

    return newList;
}

const deleteList = (id) => {
    return Lists.findById({ _id: id })
        .then(list => {
            return !list ? { status: 404, error: 'list not found' } : list.remove()
        })
}
module.exports = {
    getAllLists,
    getOneList,
    createList,
    deleteList
}