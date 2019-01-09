const listQuery = require('../queries/lists.query');

const getAllLists = () => {
    let lists = listQuery.getAllLists();

    return lists.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneList = (id) => {
    let list = listQuery.getOneList(id)

    return list.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const createList = (body) => {
    console.log(body, "we are iun the model")
    let list = listQuery.createList(body)

    return list.then(result => {
        return !result
            ? { error: 'error creating list', status: 404 }
            : result
    })
}

const deleteList = (id) => {
    let list = listQuery.deleteList(id)

    return list.then(result => {
        return result
    })
}

module.exports = {
    getAllLists,
    getOneList,
    createList,
    deleteList
}