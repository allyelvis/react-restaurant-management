const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
    totalAmount: { type: Number, required: true },
    taxAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
