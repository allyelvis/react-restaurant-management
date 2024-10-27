const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('items');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});

router.post('/', async (req, res) => {
    const { customerId, items, totalAmount, taxAmount } = req.body;
    const newOrder = new Order({ customerId, items, totalAmount, taxAmount });
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: "Error creating order" });
    }
});

module.exports = router;
