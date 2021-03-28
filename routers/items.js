const express = require('express');
const itemsController = require('../controllers/items');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', itemsController.getItemNameQuantityCategory);

// router.get('/', itemsController.getAllItems);

// router.get('/:id', itemsController.getItemById);

router.post('/add', authenticate, itemsController.createItem);

router.delete('/delete/:id', authenticate, itemsController.deleteItem);

router.patch('/updatequantity/:id', authenticate, itemsController.updateItemQuantity);

router.patch('/updatechecked/:id', authenticate, itemsController.updateItemChecked);

module.exports = router;