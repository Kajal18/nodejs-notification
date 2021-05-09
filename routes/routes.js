const express = require('express')
const route = express.Router()
const notification = require('./notification')

route.get('/notify', notification)

module.exports = route