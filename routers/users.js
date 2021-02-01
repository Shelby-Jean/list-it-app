const express = require('express');
const usersController = require('../controllers/users');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

//add authenticate middlewhere back in to each route

router.get('/', usersController.getAllUsers);

router.get('/:username', usersController.getUserByUsername);

router.put('/signup/:username', usersController.createUser);

router.delete('/delete/:username', usersController.deleteUserByUsername);

module.exports = router;