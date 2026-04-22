const { body } = require('express-validator');

exports.createPromoRules = [
    body('title').trim().notEmpty().withMessage('Title is required.'),
    body('discountCode').optional().trim(),
    body('dicountPercentage').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100.'),
    body('expiryDate').optional().isISO8601().withMessage('Invalid date format.'),
    body('imageUrl').optional().isURL().withMessage('Invalid image URL.'),
    body('isActive').optional().isBoolean(),
];

exports.updatePromoRules = [
    body('title').optional().trim().notEmpty(),
    body('discountPercentage').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100.'),
    body('expiryDate').optional().isISO8601().withMessage('Invalid date format.'),
    body('imageUrl').optional().isURL().withMessage('Invalid image URL.'),
    body('isActive').optional().isBoolean(),
];