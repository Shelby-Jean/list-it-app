const express = require('express');
const listsController = require('../controllers/lists');
const router = express.Router();

router.get('/', listsController.getAllLists);

router.get('/:id', listsController.getListById);

router.put('/add', listsController.createList);

router.delete('/delete/:id', listsController.deleteList);

module.exports = router;