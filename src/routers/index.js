const express = require('express');
const router = express.Router()

// USER LOGIN
const user = require('./user.router')
router.use('/user', user)

// DATAPRODUCT API
const product = require('./product.router')
router.use('/product', product)

module.exports = router


