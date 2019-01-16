const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/locations.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.post('/', ctrl.createLocation)
router.get('/', ctrl.getAllLocations)
//router.get('/:id', ctrl.getOneLocation)
//router.delete('/:id', ctrl.deleteLocation)

module.exports = router 