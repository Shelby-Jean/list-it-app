const express = require('express');
const listsController = require('../controllers/lists');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, listsController.getAllLists);

router.get('/:id', authenticate, listsController.getListById);

router.put('/add', authenticate, listsController.createList);

router.delete('/delete/:id', authenticate, listsController.deleteList);

module.exports = router;