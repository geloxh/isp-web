const { body } = require('express-validator');

exports.createProductRules = [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('description').trim().notEmpty().withMessage('Description is required.'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number.'),
    body('category').trim().notEmpty().isIn(['Broadband', 'Mobile', 'TV']).withMessage('Invalid category.'),
    body('speed').optional().trim(),
    body('dataLimit').optional().trim(),
    body('features').optional().isArray(),
    body('imageUrl').optional().isURL().withMessage('Invalid image URL.'),
];

exports.updateProductRules = [
    body('name').optional().trim().notEmpty(),
    body('description').optional().trim().notEmpty(),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number.'),
    body('category').optional().isIn(['Broadband', 'Mobile', 'TV']).withMessage('Invalid category.'),
    body('imageUrl').optional().isURL().withMessage('Invalid image URL.'),
];