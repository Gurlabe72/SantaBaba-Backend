const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/truckStops.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

// router.get('/', ctrl.getAllTruckStops)
// router.get('/:id', ctrl.getOneTruckStop)
router.post('/', ctrl.createTruckStop)
// router.delete('/:id', ctrl.deleteTruckStop)

module.exports = router 