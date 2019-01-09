const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/shippingDocks.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.get('/', ctrl.getAllShippingDocks)
router.get('/:id', ctrl.getOneShippingDock)
router.post('/', ctrl.createShippingDock)
router.delete('/:id', ctrl.deleteShippingDock)

module.exports = router 