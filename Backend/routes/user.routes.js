const express = require('express')
const { body } = require('express-validator')
const userModel = require('../models/user.model')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],
    userController.registerUser
)

module.exports = router