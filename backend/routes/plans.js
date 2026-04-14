const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');
const { protect, admin } = require('../middleware/authenticate');

// Get all plans
router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find({});
        res.json(plans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a plan (Admin)
router.post('/', protect, admin, async (req, res) => {
    const { name, price, data, validity, features, isFeatured } = req.body;
    try {
        const plan = new Plan({ name, price, data, validity, features, isFeatured });
        const createdPlan = await plan.save();
        res.status(201).json(createdPlan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a plan (Admin)
router.put('/:id', protect, admin, async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (plan) {
            plan.name = req.body.name || plan.name;
            plan.price = req.body.price || plan.price;
            plan.data = req.body.data || plan.data;
            plan.validity = req.body.validity || plan.validity;
            plan.features = req.body.features || plan.features;
            plan.isFeatured = req.body.isFeatured !== undefined ? req.body.isFeatured : plan.isFeatured;
            
            const updatedPlan = await plan.save();
            res.json(updatedPlan);
        } else {
            res.status(404).json({ message: 'Plan not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a plan (Admin)
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (plan) {
            await plan.deleteOne();
            res.json({ message: 'Plan removed' });
        } else {
            res.status(404).json({ message: 'Plan not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
