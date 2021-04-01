const express = require('express');
const itemsController = require('../controllers/items');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, itemsController.getItemNameQuantityCategory);

// router.get('/', authenticate, itemsController.getAllItems);

// router.get('/:id', authenticate, itemsController.getItemById);

router.post('/add', authenticate, itemsController.createItem);

router.delete('/delete/:id', authenticate, itemsController.deleteItem);

router.patch('/updatequantity/:id', authenticate, itemsController.updateItemQuantity);

router.patch('/updatechecked/:id', authenticate, itemsController.updateItemChecked);

module.exports = router;