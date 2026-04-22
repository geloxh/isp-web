const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validate = require('../middleware/validate');
const { createOrderRules, updateOrderStatusRules } = require('../middleware/validators/orderValidator');

router.get('/', orderController.getAllOrders);
router.post('/', createOrderRules, validate, orderController.createOrder);
router.put('/:id/status', updateOrderStatusRules, validate, orderController.updateOrderStatus);

module.exports = router;