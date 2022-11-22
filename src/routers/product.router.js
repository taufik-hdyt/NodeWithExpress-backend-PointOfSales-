const express = require('express');
const conn = require('../configs/db');

const router = express.Router()
const productController = require('../controllers/prouduct.controller')

router.post('/createproduct', productController.create)
router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router