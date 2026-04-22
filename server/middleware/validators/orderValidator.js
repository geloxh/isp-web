const { body } = require('express-validator');

exports.createOrderRules = [
    body('items').isArray({ min: 1 }).withMessage('Order must have at least one item.'),
    body('items.*.productId').isMongoId().withMessage('Invalid product ID.'),
    body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1.'),
    body('items.*.price').isFloat({ min: 0 }).withMessage('Price must be a positive number.'),
    body('customerName').trim().notEmpty().withMessage('Customer name is required.'),
    body('customerEmail').isEmail().normalizeEmail().withMessage('Valid email is required.'),
    body('address').trim().notEmpty().withMessage('Address is required.'),
];

exports.updateOrderStatusRules = [
    body('status')
        .notEmpty()
        .isIn(['Pending', 'Shipped', 'Delivered', 'Cancelled'])
        .withMessage('Invalid status value.'),
];