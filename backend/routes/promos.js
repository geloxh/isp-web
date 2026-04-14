const express = require('express');
const router = express.Router();
const Promo = require('../models/Promo');
const { protect, admin } = require('../middleware/authenticate');

// Get all promos
router.get('/', async (req, res) => {
    try {
        const promos = await Promo.find({});
        res.json(promos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a promo (Admin)
router.post('/', protect, admin, async (req, res) => {
    const { title, description, imageUrl, expiryDate, link } = req.body;
    try {
        const promo = new Promo({ title, description, imageUrl, expiryDate, link });
        const createdPromo = await promo.save();
        res.status(201).json(createdPromo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a promo (Admin)
router.put('/:id', protect, admin, async (req, res) => {
    try {
        const promo = await Promo.findById(req.params.id);
        if (promo) {
            promo.title = req.body.title || promo.title;
            promo.description = req.body.description || promo.description;
            promo.imageUrl = req.body.imageUrl || promo.imageUrl;
            promo.expiryDate = req.body.expiryDate || promo.expiryDate;
            promo.link = req.body.link || promo.link;
            
            const updatedPromo = await promo.save();
            res.json(updatedPromo);
        } else {
            res.status(404).json({ message: 'Promo not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a promo (Admin)
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const promo = await Promo.findById(req.params.id);
        if (promo) {
            await promo.deleteOne();
            res.json({ message: 'Promo removed' });
        } else {
            res.status(404).json({ message: 'Promo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
