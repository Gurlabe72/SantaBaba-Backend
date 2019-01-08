const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/lists.controller')
//Your Routes folder is where Express and Express-Router come to play.
//You have to add ctrl.________<--- and you put your module.exports here for every CRUD 
//The Routes for a user is written like so, below.

router.get('/', ctrl.getAllLists)
router.get('/:id', ctrl.getOneList),
    router.post('/', ctrl.createList)
router.delete('/:id', ctrl.deleteList),

    module.exports = router 