const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/onTheRoad.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.post('/', ctrl.createOnTheRoad)
// router.get('/', ctrl.getAllOnTheRoads),
//     router.get('/:id', ctrl.getOneOnTheRoad),
//     router.delete('/:id', ctrl.deleteOnTheRoad)



module.exports = router 