const express = require('express');
const usersController = require('../controllers/users');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, usersController.getAllUsers);

router.get('/:username', authenticate, usersController.getUserByUsername);

router.delete('/delete/:id', authenticate, usersController.deleteUserById);

module.exports = router;