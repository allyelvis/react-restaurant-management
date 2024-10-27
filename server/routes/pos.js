const express = require('express');
const Transaction = require('../models/Transaction');
const Tax = require('../models/Tax');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('items');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching transactions" });
    }
});

router.post('/', async (req, res) => {
    const { items, totalAmount, paymentMethod, taxAmount } = req.body;
    const newTransaction = new Transaction({ items, totalAmount, taxAmount, paymentMethod });
    try {
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: "Error creating transaction" });
    }
});

module.exports = router;
