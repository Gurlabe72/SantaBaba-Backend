//quieries is where you DEFINE all of your CRUD
//functionalities. check out the example below 
//to get an idea of what that looks like 
const Childs = require('../schema/childs.schema');

const getAllChilds = () => {
    return Childs.find()
        .then(childs => {
            return childs
        })
}

const getOneChild = (id) => {
    return Childs.findById({ _id: id })
        .then(child => {
            return child
        })
}

const createChild = (id) => {
    let Child = childQuery.getchild(id);

    return Child.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const deleteChild = (id) => {
    return Childs.findById({ _id: id })
        .then(child => {
            return !child ? { status: 404, error: 'child not found' } : child.remove()
        })
}
module.exports = {
    getAllChilds,
    getOneChild,
    createChild,
    deleteChild
}