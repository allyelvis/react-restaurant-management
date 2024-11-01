const mongoose = require('mongoose');

const TaxSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rate: { type: Number, required: true },
});

module.exports = mongoose.model('Tax', TaxSchema);
