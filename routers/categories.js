const express = require('express');
const categoriesController = require('../controllers/categories');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, categoriesController.getAllCategories);

router.post('/add', authenticate, categoriesController.createCategory);

router.delete('/delete/:id', authenticate, categoriesController.deleteCategory);

module.exports = router;