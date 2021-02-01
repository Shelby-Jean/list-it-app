const express = require('express');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/', itemsController.getAllItems);

router.get('/:id', itemsController.getItemById);

router.put('/add', itemsController.createItem);

router.delete('/delete/:id', itemsController.deleteItem);

module.exports = router;