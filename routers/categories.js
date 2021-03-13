const express = require('express');
const categoriesController = require('../controllers/categories');
// const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', categoriesController.getAllCategories);

router.post('/add', categoriesController.createCategory);

router.delete('/delete/:id', categoriesController.deleteCategory);

module.exports = router;