const express = require('express');
const itemsController = require('../controllers/items');
// const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', itemsController.getItemNameQuantityCategory);

// router.get('/', itemsController.getAllItems);

// router.get('/:id', itemsController.getItemById);

router.post('/add', itemsController.createItem);

router.delete('/delete/:id', itemsController.deleteItem);

router.patch('/updatequantity/:id', itemsController.updateItemQuantity);

module.exports = router;