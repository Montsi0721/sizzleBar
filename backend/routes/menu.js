const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const { authenticateAdmin } = require('../middleware/auth');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
    try {
        const items = await MenuItem.find({ category: req.params.category });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single menu item
router.get('/:id', async (req, res) => {
    try {
        const item = await MenuItem.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create menu item (admin only)
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const item = new MenuItem(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update menu item (admin only)
router.put('/:id', authenticateAdmin, async (req, res) => {
    try {
        const item = await MenuItem.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
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
    try {
        const item = await MenuItem.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;