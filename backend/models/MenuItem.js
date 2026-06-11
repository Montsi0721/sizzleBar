const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
    label: { type: String, required: true },
    price: { type: String, required: true }
}, { _id: false });

const flavorSchema = new mongoose.Schema({
    label: { type: String, required: true },
    color: { type: String, default: '#f97316' }
}, { _id: false });

const starchOptionSchema = new mongoose.Schema({
    label: { type: String, required: true },
    addon: { type: Number, default: 0 }
}, { _id: false });

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, default: '' },
    category: { type: String, required: true, enum: ['BreakFast', 'Lunch', 'classics', 'Drinks', 'HotBeverages'] },
    sizes: [sizeSchema],
    flavors: [flavorSchema],
    starchOptions: [starchOptionSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('MenuItem', menuItemSchema);