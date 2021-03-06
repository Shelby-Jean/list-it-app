const express = require('express');
const categoriesController = require('../controllers/categories');
const router = express.Router();

//add middleware
router.get('/', categoriesController.getAllCategories);

router.post('/add', categoriesController.createCategory);

router.delete('/delete/:id', categoriesController.deleteCategory);

module.exports = router;