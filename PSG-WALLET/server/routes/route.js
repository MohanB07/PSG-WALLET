const express = require('express')
const {createUser, login} = require('../controllers/registerController')
const {validateStudent, sendEmail, verifyOTP} = require('../controllers/validateController')

const Router = express.Router();


Router.post('/create', createUser)
      .get('/login', login)
      .get('/validateStudent', validateStudent)
      .get('/sendEmail', sendEmail)
      .post('/verifyOtp', verifyOTP)

module.exports = Router