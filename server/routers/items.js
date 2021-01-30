const express = require('express');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/list', itemsController.getItem);

router.put('/', itemsController.createItem);

router.delete('/delete/:id', itemsController.deleteItem);

module.exports = router;