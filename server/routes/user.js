const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/register', (req, res) => res.render('register'));
router.post('/users/register', userController.register);
router.get('/users/login', (req, res) => res.render('login'));
router.post('/users/login', userController.login);
router.get('/users/logout', userController.logout);

module.exports = router;