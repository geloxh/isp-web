const Promo = require('../models/Promo');

exports.getAllPromos = async (req, res) => {
  try {
    const promos = await Promo.find();
    res.json(promos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPromoById = async (req, res) => {
  try {
    const promo = await Promo.findById(req.params.id);
    if (!promo) return res.status(404).json({ message: 'Promo not found' });
    res.json(promo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPromo = async (req, res) => {
  const promo = new Promo(req.body);
  try {
    const newPromo = await promo.save();
    res.status(201).json(newPromo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePromo = async (req, res) => {
  try {
    const updatedPromo = await Promo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPromo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePromo = async (req, res) => {
  try {
    await Promo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Promo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
