const shippingDocksQuery = require('../queries/shippingDocks.query');

const getAllShippingDocks = () => {
    let shippingDocks = shippingDockQuery.getAllShippingDocks();

    return shippingDocks.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneShippingDock = (id) => {
    let shippingDock = shippingDockQuery.getOneShippingDock(id)

    return shippingDock.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const createShippingDock = (body) => {
    console.log(body, "we are iun the model")
    let shippingDock = shippingDockQuery.createShippingDock(body)

    return shippingDock.then(result => {
        return !result
            ? { error: 'error creating shippingDock', status: 404 }
            : result
    })
}

const deleteShippingDock = (id) => {
    let shippingDock = shippingDockQuery.deleteShippingDock(id)

    return shippingDock.then(result => {
        return result
    })
}

module.exports = {
    getAllShippingDocks,
    getOneShippingDock,
    createShippingDock,
    deleteShippingDock
}