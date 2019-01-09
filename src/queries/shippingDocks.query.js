const ShippingDocks = require('../schema/shippingDocks.schema');

const getAllShippingDocks = () => {
    return ShippingDocks.find()
        .then(shippingDocks => {
            return shippingDocks
        })
}

const getOneShippingDock = (id) => {
    return ShippingDocks.findById({ _id: id })
        .then(shippingDock => {
            return shippingDock
        })
}

const createShippingDock = (payload) => {
    console.log(payload, "we are iun the query")
    const newShippingDock = new ShippingDocks({
        userId: payload.userId,
        childId: payload.childId,
        nicePost: payload.nicePost,
        description: payload.description,
        score: payload.score
    })
    console.log(newShippingDock)
    newShippingDock.save().catch(error => console.log(error)
    )

    return newShippingDock;
}

const deleteShippingDock = (id) => {
    return ShippingDocks.findById({ _id: id })
        .then(shippingDock => {
            return !shippingDock ? { status: 404, error: 'shippingDock not found' } : shippingDock.remove()
        })
}
module.exports = {
    getAllShippingDocks,
    getOneShippingDock,
    createShippingDock,
    deleteShippingDock
}