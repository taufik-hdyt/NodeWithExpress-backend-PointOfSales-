const express = require('express');
const router = express.Router()

const user = require('./user.router')
router.use('/user', user)

const product = require('./product.router')
router.use('/product', product)

module.exports = router


