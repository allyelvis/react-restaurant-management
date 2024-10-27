const express = require('express');
const AccountingEntry = require('../models/AccountingEntry');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const entries = await AccountingEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching accounting entries" });
    }
});

router.post('/', async (req, res) => {
    const { type, amount, description } = req.body;
    const newEntry = new AccountingEntry({ type, amount, description });
    try {
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: "Error creating accounting entry" });
    }
});

module.exports = router;
