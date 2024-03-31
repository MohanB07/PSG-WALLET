const express = require('express')
const {createUser, login} = require('../controllers/registerControls')
const {validateStudent, approve, sendEmail} = require('../controllers/validateUser')

const Router = express.Router();


Router.post('/create', createUser)
      .get('/login', login)
      .get('/validateStudent', validateStudent)
      .get('/sendEmail', sendEmail)
      .get('/approve', approve)

module.exports = Router