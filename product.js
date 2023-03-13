const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    category: String,
    price: Number
});

module.exports = mongoose.model('products', productSchema);