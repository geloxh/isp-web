const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validate = require('../middleware/validate');
const { createProductRules, updateProductRules } = require('../middleware/validators/productValidator');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', createProductRules, validate, productController.createProduct);
router.put('/:id', updateProductRules, validate, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;