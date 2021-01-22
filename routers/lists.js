const express = require('express');
const listsController = require('../controllers/lists');
const router = express.Router();

router.get('/list', listsController.getList);

router.put('/', listsController.createList);

router.delete('/delete/:id', listsController.deleteList);

module.exports = router;