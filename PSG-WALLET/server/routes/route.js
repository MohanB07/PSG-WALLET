const express = require('express')
const {createUser, login} = require('../controllers/registerControls')
const {validateStudent} = require('../controllers/validateUser')

const Router = express.Router();


Router.post('/create', createUser)
      .get('/login', login)
      .get('/validateStudent', validateStudent)

module.exports = Router