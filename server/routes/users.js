const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', userController.register);
router.get('/login', (req, res) => res.render('login'));
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;