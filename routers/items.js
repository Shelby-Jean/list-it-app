const express = require('express');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/', itemsController.getItemNameQuantityCategory);

// router.get('/', itemsController.getAllItems);

// router.get('/:id', itemsController.getItemById);

router.post('/add', itemsController.createItem);

router.delete('/delete/:name', itemsController.deleteItem);

router.patch('updatequantity/:name', itemsController.updateItemQuantity);

module.exports = router;