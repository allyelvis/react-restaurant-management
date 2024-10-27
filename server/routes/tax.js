const express = require('express');
const Tax = require('../models/Tax');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const taxes = await Tax.find();
        res.json(taxes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tax configurations" });
    }
});

router.post('/', async (req, res) => {
    const { name, rate } = req.body;
    const newTax = new Tax({ name, rate });
    try {
        await newTax.save();
        res.status(201).json(newTax);
    } catch (error) {
        res.status(400).json({ message: "Error creating tax configuration" });
    }
});

module.exports = router;
