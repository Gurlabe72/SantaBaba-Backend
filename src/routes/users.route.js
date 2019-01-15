const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/user.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.post('/', ctrl.createUser)
router.get('/', ctrl.getAllUsers)
router.get('/:id', ctrl.getOneUser)
// router.delete('/:id', ctrl.deleteUser)

module.exports = router 