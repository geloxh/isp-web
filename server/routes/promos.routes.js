const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');
const validate = require('../middleware/validate');
const { createPromoRules, updatePromoRules } = require('../middleware/validators/promoValidator');

router.get('/', promoController.getAllPromos);
router.get('/:id', promoController.getPromoById);
router.post('/', createPromoRules, validate, promoController.createPromo);
router.put('/:id', updatePromoRules, validate, promoController.updatePromo);
router.delete('/:id', promoController.deletePromo);

module.exports = router;