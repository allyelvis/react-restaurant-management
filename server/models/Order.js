const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
    totalAmount: { type: Number, required: true },
    taxAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
