const childQuery = require('../queries/childs.query');

const getAllChilds = () => {
    let childs = childQuery.getAllChilds();

    return childs.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneChild = (id) => {
    let child = childQuery.getOneChild(id)

    return child.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}
const createChild = () => {
    let child = childQuery.createChild(childInfo, hashPassword)

    return child.then(result => {
        return !result
            ? { error: 'error creating child', status: 404 }
            : result
    })
}
const deleteChild = (id) => {
    let child = childQuery.deleteChild(id)

    return child.then(result => {
        return result
    })
}

module.exports = {
    getAllChilds,
    getOneChild,
    createChild,
    deleteChild
}