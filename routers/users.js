const express = require('express');
const usersController = require('../controllers/users');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, usersController.getAllUsers);

router.get('/:email', authenticate, usersController.getUserByEmail);

router.put('/signup/:email', authenticate, usersController.createUser);

router.delete('/delete/:email', authenticate, usersController.deleteUserByEmail);

module.exports = router;