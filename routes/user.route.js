const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/auth.controller');

router.post('/register', UserController.register);

router.post('/login', UserController.login);