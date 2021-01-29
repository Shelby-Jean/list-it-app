const express = require('express');
const usersController = require('../controllers/users');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, usersController.getAllUsers);

router.get('/:username', authenticate, usersController.getUserByUsername);

router.put('/signup/:username', authenticate, usersController.createUser);

router.delete('/delete/:username', authenticate, usersController.deleteUserByUsername);

module.exports = router;