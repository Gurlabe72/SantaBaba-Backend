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
        locationId: payload.locationId,
        timeIn: payload.timeIn,
        delayTime: payload.delayTime,
        amenities: payload.amenities
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