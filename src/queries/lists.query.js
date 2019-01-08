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

const createList = (id) => {
    let List = listQuery.getList(id);

    return List.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
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