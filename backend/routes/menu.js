const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MenuItem = require('../models/MenuItem');
const { authenticateAdmin } = require('../middleware/auth');

// SECURITY: Only these fields may be written by the client.
// Spreading req.body directly into findByIdAndUpdate (mass assignment) would let
// a caller overwrite internal fields like _id, __v, createdAt, or any future
// sensitive field added to the schema.
const ALLOWED_FIELDS = ['name', 'price', 'image', 'description', 'category', 'sizes', 'flavors', 'starchOptions'];

function pickAllowed(body) {
    const update = {};
    ALLOWED_FIELDS.forEach(field => {
        if (body[field] !== undefined) update[field] = body[field];
    });
    return update;
}

function isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch menu items' });
    }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
    try {
        const items = await MenuItem.find({ category: req.params.category });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch category items' });
    }
});

// Get single menu item
router.get('/:id', async (req, res) => {
    // SECURITY: validate ObjectId format before hitting the database.
    // Without this, a malformed id causes Mongoose to throw a CastError that
    // bubbles through as an unhandled 500 and may leak a stack trace.
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ error: 'Invalid item ID' });
    }
    try {
        const item = await MenuItem.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch item' });
    }
});

// Create menu item (admin only)
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const data = pickAllowed(req.body);
        const item = new MenuItem(data);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update menu item (admin only)
router.put('/:id', authenticateAdmin, async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ error: 'Invalid item ID' });
    }
    try {
        // SECURITY: only write whitelisted fields — no mass assignment
        const update = pickAllowed(req.body);
        const item = await MenuItem.findByIdAndUpdate(
            req.params.id,
            update,
            { new: true, runValidators: true }
        );
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete menu item (admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ error: 'Invalid item ID' });
    }
    try {
        const item = await MenuItem.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
});

module.exports = router;