const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/childs.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.get('/', ctrl.getAllChilds)
router.get('/:id', ctrl.getOneChild),
    router.delete('/:id', ctrl.deleteChild),
    router.post('/', ctrl.createChild)

module.exports = router 