const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');
const protect = require('../middleware/auth.middleware');

router.get('/', promoController.getAllPromos);
router.get('/:id', promoController.getPromoById);
router.post('/', protect, promoController.createPromo);
router.put('/:id', protect, promoController.updatePromo);
router.delete('/:id', protect,promoController.deletePromo);

module.exports = router;
