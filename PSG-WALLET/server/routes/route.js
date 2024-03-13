const express = require('express')
const Router = express.Router()
const registerControl = require('../controllers/registerControls')
const loginControl = require('../controllers/loginControl')


Router.post('/',registerControl.createUser)