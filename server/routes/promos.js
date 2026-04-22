const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');

router.get('/', promoController.getAllPromos);
router.get('/:id', promoController.getPromoById);
router.post('/', promoController.createPromo);
router.put('/:id', promoController.updatePromo);
router.delete('/:id', promoController.deletePromo);

module.exports = router;
