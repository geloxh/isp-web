const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const protect = require('../middleware/auth.middleware');

router.get('/', protect, orderController.getAllOrders);
router.post('/', orderController.createOrder);
router.put('/:id/status', protect, orderController.updateOrderStatus);

module.exports = router;
